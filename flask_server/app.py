from flask import Flask, render_template, request, jsonify
from langchain.chains import LLMChain
from langchain.chat_models import ChatOpenAI
from langchain.prompts import PromptTemplate

from flask_server.modules.agents.database_query import query_loan_chain
from flask_server.modules.agents.finanical_information import get_response_from_query
from flask_server.modules.agents.intention_decesion import decide
from flask_server.output_parsers import loan_intel_parser

app = Flask(__name__)

@app.route("/api/chat", methods=["POST"])
def chat():
    # 채팅 오면 대출 상품 조회, 대출 용어 조회, 그 외 요청의 세 가지로 분기
    # 세 가지중 어디로 분기할지 결정하는 함수
    # Agent 하나 두고 Tool 3개중에 뭐쓸지 고민하라고 보내는게 맞음 지금 고려할수 있는건 아니고...

    summary_template = """
    given the database information {database_information} about a Loan Data and Financial Information {financial_information} from I want you to create:
    
    1. if I want to know about the loan data. you can tell me about loan data.
       else if I want to know about the financial information. you can tell me about financial information.
       
    2. if you tell me about loan data. you can calculate Average monthly repayment amount. else, not calculate.
    
    \n{format_instruction}    
    """

    summary_prompt_template = PromptTemplate(
        input_variables=["database_information", "financial_information"],
        template=summary_template,
        # 필수 입력 변수의 하위 집합을 지정할 수 있음.
        partial_variables={
            "format_instruction": loan_intel_parser.get_format_instructions()
        },
    )

    llm = ChatOpenAI(temperature=0, model_name="gpt-3.5-turbo-16k")
    chain = LLMChain(llm=llm, prompt=summary_prompt_template)
    user_message = request.json["user_message"]
    intention = decide(user_message)
    loan_data = query_loan_chain(user_message)
    financial_data = get_response_from_query(user_message)
    result = chain.run(database_information=loan_data, financial_information=financial_data)
    print(result)
    return result
    # return jsonify({"response": response})
    # return loan_intel_parser.parse(result['properties'])
    # return loan_intel_parser.parse(result)


if __name__ == "__main__":
    app.run(port=8000, host="0.0.0.0", debug=True)
