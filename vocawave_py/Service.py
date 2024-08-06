from Repository import *
from sklearn.feature_extraction.text import TfidfVectorizer
from scipy.spatial.distance import euclidean
import re

def getScore(submit : dict, code : str) -> dict:
    score = []
    correct = 0
    for item in submit:
        w, m, a = item["word"], item["mean"], item["ans"]
        item = {}
        if a[0] == "W":
            item["submit"] = w
            item["ans"] = a
            if w == a[1:]: 
                correct += 1
                item["ox"] = "o"
            else:
                item["ox"] = "x"
        else:
            item["submit"] = m
            item["ans"] = a
            if m == a[1:]: 
                correct += 1
                item["ox"] = "o"
            else:
                item["ox"] = "x"
        score.append(item)
        rate = correct / len(score) * 100
        updateScore(code, rate)
    return score, ("%d" % rate)

# def getRecommend(id : str):
#     mylist = getMyWordlist(id)
#     sharelist = getShareboard(id)
#     keyword = []
#     keyword += list(mylist['wtitle']) + list(mylist['cmt'])
#     data = set()
#     for word in keyword:
#         data.add(re.sub(r'^\d+|\d+$', '', word))
#     recommend = sharelist[sharelist.apply(lambda row: checkWord(row['title'], data) or checkWord(row['cmt'], data), axis=1)]
#     return recommend

# def checkWord(sentence, data):
#     return any(word in sentence for word in data)

    
