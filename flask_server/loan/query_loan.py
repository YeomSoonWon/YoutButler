import pymysql
import os
from langchain.chat_models import ChatOpenAI
from langchain.memory import ConversationBufferMemory
from langchain.utilities import SQLDatabase
from langchain.prompts.prompt import PromptTemplate
from langchain.llms import OpenAI
from langchain_experimental.sql import SQLDatabaseChain
from langchain.prompts.prompt import PromptTemplate


def query_loan(chat):
    db = pymysql.connect(
        host="mysql-db",
        port=3306,
        user="root",
        passwd=f"{os.environ.get('MYSQL_PASSWORD')}",
        db="loan",
        charset="utf8",
        autocommit=True,
    )



    db = SQLDatabase.from_uri(f"mysql+pymysql://root:{os.environ.get('MYSQL_PASSWORD')}@mysql-db:3306/loan",
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

    db_chain = SQLDatabaseChain.from_llm(llm2, db, prompt=PROMPT, verbose=True, use_query_checker=True)
    response = db_chain.run(chat)
    print(response)
    return response

    # cursor= db.cursor()
    # cursor.execute("SELECT VERSION()")
    # data = cursor.fetchone()
    # print(data)
    # db.close()

if __name__ == "__main__":
    query_loan("국민은행에서 가장 낮은 금리로 받을 수 있는 전세자금대출을 2개 알려줘. 그 대출들이 어떤 금리를 가지고 있는지, 그리고 1억을 대출받아서 3년동안 원리금분할상환 방식으로 상환하면 한달마다 얼마를 갚아야 하는지도 알려줘. 대답은 한글이어야 해")

