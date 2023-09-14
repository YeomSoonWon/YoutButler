import pymysql
import os
from langchain.chat_models import ChatOpenAI
from langchain.utilities import SQLDatabase
from langchain.llms import OpenAI
from langchain_experimental.sql import SQLDatabaseChain


db = pymysql.connect(
    host="127.0.0.1",
    port=3306,
    user="ssafy",
    passwd=f"{os.environ.get('MYSQL_PASSWORD')}",
    db="loan",
    charset="utf8",
    autocommit=True,
)

db = SQLDatabase.from_uri("mysql+pymysql://ssafy:ssafy@localhost:3306/loan")
# llm = OpenAI(temperature=0, verbose=True)
llm2 = ChatOpenAI(model_name="gpt-3.5-turbo-16k", temperature=0)
db_chain = SQLDatabaseChain.from_llm(llm2, db, verbose=True)
response = db_chain.run("국민은행에서 가장 낮은 금리로 받을 수 있는 주택담보대출을 2개 알려줘. 그 대출들이 어떤 금리를 가지고 있는지, 그리고 1억을 대출받아서 3년동안 원리금분할상환 방식으로 상환하면 한달마다 얼마를 갚아야 하는지도 알려줘")
print(response)


# cursor= db.cursor()
# cursor.execute("SELECT VERSION()")
# data = cursor.fetchone()
# print(data)
# db.close()
