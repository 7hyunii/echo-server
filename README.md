# Echo Server (TypeScript)

## 1. 설치

```bash
npm install
npm install -D ts-node
```

## 2. 서버 실행

```bash
npx ts-node src/echo-server.ts
```

"Server is listening on port 12345" 메시지가 뜨면 정상적으로 실행된 것.

## 3. 클라이언트 실행

```bash
npx ts-node src/echo-client.ts
```

클라이언트가 서버에 접속하여 데이터를 보내고, 
서버가 받은 데이터를 그대로 돌려줍니다.


## 5. 서버 로그 확인
- 서버 터미널에 "new connection", "data:", "closing." 등의 로그가 출력되면 정상적으로 동작 중임을 알 수 있습니다.

---


