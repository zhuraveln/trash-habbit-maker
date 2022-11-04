# 🌝 SSR app and REST API

powered by 💚 **Node.JS**

## 🛠 Tech Stack

- Node.js
- Express / ejs
- MongoDB / mongoose
- nodemon / morgan

## ⚡️ Features

- Create and save habits in MongoDB for button `random` in **[you-can](https://you-can.vercel.app/)** (vercel)
- REST API for **[you-can](https://github.com/zhuraveln/you_can)** (github)

## 👀 Demo

- **[trash-habit-maker](https://trash-habbits-maker.herokuapp.com/)** (heroku)

## 🏗 API Reference

### Get All Trash Habits

```bash
  GET /api
```

### Create Trash Habit

```bash
  POST /api
```

| Body                         | Type   |
| :--------------------------- | :----- |
| `{ "title": "","type": "" }` | `JSON` |

### Delete Trash Habit

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
