import pandas as pd
from sqlalchemy import *

engine = create_engine("oracle://VocaWave:1234@localhost:1521/xe")
conn = engine.connect()

def updateScore(code : str, cor):
    global conn
    query = text(("UPDATE wordlist SET rate = %d WHERE code = '%s'" % (cor, code)))
    conn.execute(query)
    conn.commit()
    return

def getShareboard(id : str):
    global conn
    query = """SELECT w.code, w.wtitle, w.cmt, u.nick 
               FROM wordlist w
               JOIN users u on w.id = u.id
               WHERE w.code in (SELECT code FROM shareboard)
               AND u.id != '""" + id + "'"
    return pd.read_sql_query(query, conn)

def getMyWordlist(id : str):
    global conn
    query = """SELECT wtitle, cmt
               FROM wordlist
               WHERE id = '""" + id + "'"
    return pd.read_sql_query(query, conn)

