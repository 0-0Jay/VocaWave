from Repository import *

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
