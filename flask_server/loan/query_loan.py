import pymysql
import os

from langchain import LLMMathChain, LLMChain
from langchain.agents import initialize_agent, AgentType
from langchain.chat_models import ChatOpenAI
from langchain.embeddings import OpenAIEmbeddings
from langchain.memory import ConversationBufferMemory
from langchain.prompts import SystemMessagePromptTemplate, HumanMessagePromptTemplate, ChatPromptTemplate
from langchain.tools import Tool
from langchain.utilities import SQLDatabase
from langchain.prompts.prompt import PromptTemplate
from langchain.llms import OpenAI
from langchain_experimental.sql import SQLDatabaseChain
from langchain.prompts.prompt import PromptTemplate
from langchain.vectorstores.faiss import FAISS


def wonrigum_equal(original_money, loan_year_rate, repayment_months):
    loan_year_rate /= 100 if loan_year_rate >= 1 else loan_year_rate
    loan_year_rate /= 12
    return int(original_money * (loan_year_rate * (1 + loan_year_rate) ** repayment_months) / ((1 + loan_year_rate) ** repayment_months - 1))


# def wongum_eqaul(original_money, loan_year_rate, repayment_months):
#     return original_money * loan_year_rate * (12 *)

def ilsibul(original_money, loan_year_rate, repayment_months):
    loan_year_rate /= 100 if loan_year_rate >= 1 else loan_year_rate
    loan_month_rate = loan_year_rate / 12
    return original_money + (original_money * loan_month_rate * repayment_months)


def get_response_from_query(query):
    # FAISS 먼저 적용하고 오기
    # docs = vector_db.similarity_search(query, k=k)
    embedding = OpenAIEmbeddings(openai_api_key=os.environ.get("OPENAI_API_KEY"))

    path = "./DB/vector/korea_bank_700_information/index.faiss"
    print(os.getcwd())
    if os.path.exists(path):
        print(f"The file {path} exists.")
    else:
        print(f"The file {path} does not exist.")

    vector_db = FAISS.load_local("./DB/vector/korea_bank_700_information", embedding)
    docs = vector_db.similarity_search(query)
    chat = ChatOpenAI(model_name="gpt-3.5-turbo-16k", temperature=0)

    template = """
    당신은 부동산을 구매하려는 사용자에게 금융, 부동산과 관련된 정보를 제공하는 assistant입니다.
    
    Document retrieved from your DB : {docs}

    Answer the questions referring to the documents which you Retrieved from DB as much as possible.
    
    답변의 형식은 아래와 같이 진행합니다.
    
    "유저가 모르는 단어": "이에 대한 설명"
    "유저가 모르는 단어2": "이에 대한 설명2"
    """
    # If you fell like you don't have enough-information to answer the question, say "제가 알고 있는 정보가 없습니다."
    system_message_prompt = SystemMessagePromptTemplate.from_template(template)

    human_template = "Answer the following question IN KOREAN: {question}"
    human_message_prompt = HumanMessagePromptTemplate.from_template(human_template)

    chat_prompt = ChatPromptTemplate.from_messages(
        [system_message_prompt, human_message_prompt]
    )

    chain = LLMChain(llm=chat, prompt=chat_prompt)
    response = chain.run(docs=docs, question=query)
    return response


def query_loan(chat):
    db = pymysql.connect(
        host="j9a405.p.ssafy.io",
        port=3306,
        user="root",
        passwd=f"{os.environ.get('MYSQL_PASSWORD')}",
        db="loan",
        charset="utf8",
        autocommit=True,
    )



    db = SQLDatabase.from_uri(f"mysql+pymysql://root:{os.environ.get('MYSQL_PASSWORD')}@j9a405.p.ssafy.io:3306/loan",
                              include_tables=["mortgage_loan", "jeonse_loan", "credit_loan"],
                              sample_rows_in_table_info=5)

    # print(db.table_info)
    # llm = OpenAI(temperature=0, verbose=True)

    llm2 = ChatOpenAI(model_name="gpt-3.5-turbo-16k", temperature=0)

    _DEFAULT_TEMPLATE = """Given an input question, first create a syntactically correct {dialect} query to run, then look at the results of the query and return the answer.
    Use the following format:

    Question: "Question here"
    SQLQuery: "SQL Query to run"
    SQLResult: "Result of the SQLQuery"
    Answer: "
    안녕하세요! 당신의 집사입니다. 회원님의 요청에 따라 저희가 조사한 결과 회원님의 요구에 맞는 최적의 대출 상품은 아래와 같습니다.
    
    Final answer here
    
    다만, 실제 대출시에 적용되는 대출한도와 대출금리는 은행의 대출 심사 결과에 따라 변동될 수 있으므로, 위의 결과는 참고용으로만 사용해주시기 바랍니다.
    "
    
    최종 Answer는 한글로 작성되어야 한다.

    Only use the following tables:

    {table_info}

    If someone asks for the table 개인신용대출, 최저금리를 조회하기 위해 사용되는 열 이름을 신용점수에 따라 적절히 선택하여야 한다.

    Question: {input}"""

    # memory = ConversationBufferMemory(memory_key="chat_history", memory_type="list", max_len=10)

    PROMPT = PromptTemplate(
        input_variables=["input", "table_info", "dialect"], template=_DEFAULT_TEMPLATE
    )

    db_chain = SQLDatabaseChain.from_llm(
        llm2, db, prompt=PROMPT, verbose=True, use_query_checker=True
    )

    llm_math_chain = LLMMathChain.from_llm(llm=llm2, verbose=True)

    tools = [
        Tool(
            name="Database",
            func=db_chain.run,
            description="유저가 원하는 대출 상품을 찾기 위해 데이터베이스에 접근할 때 유용한 도구입니다."
        ),
        Tool(
            name="financial_information",
            func=get_response_from_query,
            description="유저가 금융 용어에 대한 설명을 요구했을때 사용하기 유용한 도구입니다."
        ),
        Tool(
            name="wonrigum_equal",
            func=wonrigum_equal,
            description="원리금 균등 상환 방식으로 대출을 받았을 때, 매달 갚아야 하는 금액을 계산해주는 도구입니다."
        ),
        Tool(
            name="ilsibul",
            func=ilsibul,
            description="원금 만기 일시 상환 방식으로 대출을 받았을 때, 매달 갚아야 하는 금액을 계산해주는 도구입니다."
        ),
        # Tool(
        #     name="wongum_eqaul",
        #     func=wongum_eqaul,
        #     description="원금 균등 상환 방식으로 대출을 받았을 때, 매달 갚아야 하는 금액을 계산해주는 도구입니다."
        # )
    ]

    # response = db_chain.run(chat)
    agent = initialize_agent(
        tools=tools,
        llm=llm2,
        agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
        verbose=True,
    )

    response = agent.run(chat)
    print(response)
    return response

    # cursor= db.cursor()
    # cursor.execute("SELECT VERSION()")
    # data = cursor.fetchone()
    # print(data)
    # db.close()


def chat_bot(chat):
    llm = ChatOpenAI(model_name="gpt-3.5-turbo-16k", temperature=0)
    _DEFAULT_TEMPLATE = """ 당신은 유저의 질문을 받고 다음과 같은 3가지 질문에 대한 답변을 생성하는 assistant 입니다. 당신은 다음과 같은 세가지 경우에 상황에 맞는 대답을 생성해야 합니다.
     1. 유저가 대출 상품 추천을 요청했을때"""


if __name__ == "__main__":
    query_loan("국민은행에서 가장 낮은 금리로 받을 수 있는 전세자금대출을 2개 알려줘. 그 대출들이 어떤 금리를 가지고 있는지, 그리고 1억을 대출받아서 3년동안 원리금분할상환 방식으로 상환하면 한달마다 얼마를 갚아야 하는지도 알려줘. 대답은 한글이어야 해")

