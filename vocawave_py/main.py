from fastapi import FastAPI, Request
from Service import *
from http import HTTPStatus
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

#127.0.0.1:8000/main/
#192.168.35.243:8000/main/
app = FastAPI()
origins = ["*"]
# CORS 설정 추가
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post('/main/test')
async def test(request: Request) -> dict:
    body = await request.json()
    print(body)
    result = {}
    result["status"] = HTTPStatus.OK
    result["score"], result["rate"] = getScore(body['list'], body['code'])
    return result

# @app.get('/main/recommend/{id}')
# async def recommend(id : str) -> dict:
#     result = {}
#     result["status"] = HTTPStatus.OK
#     result["list"] = getRecommend()

# 실행방법
# 1. cmd를 켜고 main.py가 있는 폴더로 cd를 통해 이동
# 2. uvicorn main:app --reload 명령어 실행
# 2-1. --reload 옵션은 실시간 반영 느낌이라 ctrl + C로 프로그램 종료가 안됨. 안쓰는거 추천

# 테스트용 코드
if __name__ == '__main__':
    # uvicorn.run(app, host="192.168.35.243", port=8000)
    uvicorn.run(app, host="172.26.13.211", port=8000)