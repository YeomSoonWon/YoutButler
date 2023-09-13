import pymysql
import os
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

llm = OpenAI(temperature=0, verbose=True)
db_chain = SQLDatabaseChain.from_llm(llm, db, verbose=True)
db_chain.run("How many Loan Data are there in the database?")


# cursor= db.cursor()
# cursor.execute("SELECT VERSION()")
# data = cursor.fetchone()
# print(data)
# db.close()