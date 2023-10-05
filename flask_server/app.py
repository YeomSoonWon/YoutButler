import json

from flask import Flask, render_template, request, jsonify
from langchain.chains import LLMChain
from langchain.chat_models import ChatOpenAI
from langchain.prompts import PromptTemplate

from flask_server.modules.agents.database_query import query_loan_chain
from flask_server.modules.agents.finanical_information import get_response_from_query
from flask_server.modules.agents.intention_decesion import decide

app = Flask(__name__)


# 국민은행에서 가장 낮은 금리의 주택 담보 대출이 뭔지 알려줘. DSR가 무슨 의미인지 알려줘. 그리고 가장 맛있는 식당 추천해줘
@app.route("/api/chat", methods=["POST"])
def chat():
    summary_template = """
    주어진 대출 상품 정보 데이터와 금융 용어 정보 데이터를 바탕으로 대답을 생성해야 합니다.
    대답의 형태는 반드시 아래와 같아야 합니다. 큰 따옴표에 유의하십시오. 반드시 JSON으로 Parsing이 가능한 형태여야 합니다.
    
    {{
        "loan_name": 대출 상품의 정보가 주어진다면 대출 상품의 이름이 들어갑니다 대출 상품의 정보가 없다면 빈 값이 들어갑니다,
        "loan_interest": 대출 상품의 정보가 주어진다면 float 형태의 대출 상품의 금리가 들어갑니다 대출 상품의 정보가 없다면 빈 값이 들어갑니다,
        "bank_name": 대출 상품의 정보가 주어진다면 대출 상품을 제공하는 은행의 이름이 들어갑니다 대출 상품의 정보가 없다면 빈 값이 들어갑니다,
        "message": 대출 상품의 정보가 주어진다면 대출 상품에 대한 설명이 들어갑니다 대출 상품의 정보가 없다면 빈 값이 들어갑니다,
        "information": 금융 용어에 대한 정보가 주어진다면 금융 용어에 대한 설명이 들어갑니다 금융 용어에 대한 정보가 없다면 빈 값이 들어갑니다.
    }}
    
    대출 상품의 정보는 아래와 같습니다.
    
    {database_information}
    
    금융 용어의 정보는 아래와 같습니다.
    
    {financial_information}
    """

    summary_prompt_template = PromptTemplate(
        input_variables=["database_information", "financial_information"],
        template=summary_template
        # 필수 입력 변수의 하위 집합을 지정할 수 있음.
        # partial_variables={
        #     "format_instruction": loan_intel_parser.get_format_instructions()
        # },
    )

    llm = ChatOpenAI(temperature=0, model_name="gpt-3.5-turbo-16k")
    chain = LLMChain(llm=llm, prompt=summary_prompt_template)
    user_message = request.json["user_message"]
    intention = decide(user_message)
    data = json.loads(intention)
    loan_data = query_loan_chain(data.get('loan'))
    financial_data = get_response_from_query(data.get('finance'))
    response = chain.run(database_information=loan_data, financial_information=financial_data)
    print(response)
    data = json.loads(response)
    print(data)
    print(jsonify(data))
    return jsonify(data)
    # return result
    # return loan_intel_parser.parse(result['properties'])
    # return loan_intel_parser.parse(result)


if __name__ == "__main__":
    app.run(port=8000, host="0.0.0.0", debug=True)
