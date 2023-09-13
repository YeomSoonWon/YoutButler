from flask import Flask, render_template, request, jsonify

app = Flask(__name__)


def decide(chat: str):
    # LLM 모델이랑 연결해서 적절히 분기
    return


@app.route("/chat")
def chat():
    # 채팅 오면 대출 상품 조회, 대출 용어 조회, 그 외 요청의 세 가지로 분기
    # 세 가지중 어디로 분기할지 결정하는 함수
    decide(chat)
    return "test"
