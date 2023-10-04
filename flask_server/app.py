from flask import Flask, render_template, request, jsonify
from loan.query_loan import query_loan

app = Flask(__name__)

def decide(chat: str):
    # LLM 모델이랑 연결해서 적절히 분기
    return

# @app.route("/api", methods=["POST"])
# @cross_origin()
# def api():
#     print("ASDASD")
#     data = request.get_json()
#     user = "0"
#     if user not in socker_per_user:
#         print("User not in connected to to websocket")
#     # sock = socker_per_user.get(user, None)
#     # sock.send("Starting...")
#     print("data:", data)
#     history = data["history"]
#     res = main.run(history, socket=sock)
#     return jsonify(res)

@app.route("/api/chat", methods=["POST"])
def chat():
    # 채팅 오면 대출 상품 조회, 대출 용어 조회, 그 외 요청의 세 가지로 분기
    # 세 가지중 어디로 분기할지 결정하는 함수
    # Agent 하나 두고 Tool 3개중에 뭐쓸지 고민하라고 보내는게 맞음 지금 고려할수 있는건 아니고...
    user_message = request.json["user_message"]
    response = query_loan(user_message)
    return jsonify({"response": response})


if __name__ == "__main__":
    app.run(port=8000, host="0.0.0.0", debug=True)
