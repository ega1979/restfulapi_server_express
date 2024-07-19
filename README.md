# restfulapi_server_express
Expressで作ったREST APIのサンプル（ローカルオンリー）

### APIの種類
- GET
  
ユーザー全体の情報取得
```
localhost:3000/users
```
個別ユーザーの情報取得
```
localhost:3000/users/[id:number]
```

- POST  

ユーザーの情報追加
```
localhost:3000/users
```

- PUT  

ユーザーの情報更新
```
localhost:3000/users/[id:number]
```
body
```
{
  name: string
  age: number
}
```

- DELETE

ユーザーの情報削除
```
localhost:3000/users/[id:number]
```

### ダウンロード・インストール
```
git clone　git@github.com:ega1979/restfulapi_server_express.git
cd restfulapi_server_express
npm ci
```

### 実行
```
npm run dev
```
