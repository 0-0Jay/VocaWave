def getScore(submit : dict) -> dict:
    score = {}
    id = 0
    for item in submit:
        w, m, a = item["word"], item["mean"], item["ans"]
        id += 1
        score[id] = {}
        if a[0] == "W":
            score[id]["submit"] = w
            score[id]["ans"] = a
            score[id]["ox"] = "o" if w == a[1:] else "x"
        else:
            score[id]["submit"] = m
            score[id]["ans"] = a
            score[id]["ox"] = "o" if m == a[1:] else "x"
    return score
