# 🌝 SSR and REST API for "You can!"

powered by 💚 **Node.JS**

**[you-can](https://github.com/zhuraveln/you_can)** (github)

## 👀 Demo

- **[trash-habit-maker](https://trash-habbits-maker.herokuapp.com/)** (heroku)

## 🛠 Tech Stack

- Node.js
- Express / ejs
- MongoDB / mongoose
- nodemon / morgan

## ⚡️ Features

- Create and save habit in MongoDB
- REST API

## 🏗 API Reference

### Get All Trash Habbits

```bash
  GET /api
```

### Post Trash Habbit

```bash
  POST /api
```

| Body                         | Type   |
| :--------------------------- | :----- |
| `{ "title": "","type": "" }` | `JSON` |

### Delete Trash Habbit

```bash
  DELETE /api/${id}
```

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `id`      | `string` | habit id    |

## 🚚 Run Locally

Clone the project

```bash
  git clone https://github.com/zhuraveln/trash-habbit-maker.git
```

Install dependencies

```bash
  npm install
```

Start the local server

```bash
  npm run dev
```

## 🔐 Environment Variables

Add the following environment variables to your .env file

`MONGO_URL` - _your MongoDB URL_

`PORT` - _your local port_
