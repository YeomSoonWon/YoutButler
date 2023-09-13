import pymysql
import os

db = pymysql.connect(
    host="127.0.0.1",
    port=3306,
    user="ssafy",
    passwd=f"{os.environ.get('MYSQL_PASSWORD')}",
    db="loan",
    charset="utf8",
    autocommit=True,
)

cursor= db.cursor()

cursor.execute("SELECT VERSION()")

data = cursor.fetchone()

print(data)

db.close()