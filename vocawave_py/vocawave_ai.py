from openai import OpenAI
client = OpenAI(api_key='여기에 API KEY 입력')
system_instruction = "두 문장이 의미가 거의 같은지 검사해서 유사도를 측정해주는 AI"
message = [{"role":"system","content": system_instruction}]

def check(correct, answer):
  request = '"' + correct + '" 와 "' + answer + '" 이 의미가 같으면 true 다르면 false만 대답해'
  user_input = {"role": "user", "content": request}
  message.append(user_input)

  response = client.chat.completions.create(
    model="gpt-4o",
    messages=message
  )

  return response.choices[0].message.content


docs = [
    "데이터베이스 테이블에 저장된 데이터의 검색 속도를 향상시키기 위한 자료구조",
    "DB 분야에 있어서 테이블에 대한 동작의 속도를 높여주는 자료 구조",
    "데이터베이스에서 테이블 동작 속도를 늦추는 비효율적 자료구조",
    "테이블 자료구조",
    "테이블 순서도",
    "엑셀 테이블에서 데이터 검색 속도 향상 도구",
    "DB 테이블에 저장된 데이터의 처리 속도를 향상시키는 도구",
    "데이터베이스 구성 요소",
    "데이터 베이스 행 번호"
    ]

correct = docs[0]
for i in range(1,9):
  answer = docs[i]
  print(check(correct, answer))