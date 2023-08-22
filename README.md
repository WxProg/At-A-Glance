# Weather Events API ☔️

An elegant RESTful API built with **Node.js**, **Express**, and **MongoDB** for managing, tracking, and querying weather events.

## 🌟 Features

- 📌 **Full CRUD Operations**: Manage weather events with Create, Read, Update, and Delete operations.
- 🔍 **Search by ID**: Easily find a specific weather event using its unique identifier.
- 🛡️ **Middleware Support**: Custom middleware for efficient error-handling and data pre-fetching.
- ✅ **Validation**: Robust validation and error feedback for API requests to ensure data integrity.

## 📋 Prerequisites

To run this project, you'll need:

- [Node.js](https://nodejs.org/) - JavaScript runtime environment.
- [MongoDB](https://www.mongodb.com/) - A source-available cross-platform document-oriented database program.

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone [your-repository-link]
cd [your-repository-name]
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

- Create a `.env` file in your project root.
- Set your MongoDB connection URI:

```env
MONGODB_DATABASE_URL=your_mongodb_uri_here
```

### 4. Start the Server

```bash
npm start
```

The server will now be live at `http://localhost:[PORT]`.

## 🌐 API Endpoints

- **GET** `/weatherEvents`: Fetch all weather events.
- **GET** `/weatherEvents/:id`: Fetch a specific weather event by ID.
- **POST** `/weatherEvents`: Add a new weather event.
- **PATCH** `/weatherEvents/:id`: Modify an existing weather event.
- **DELETE** `/weatherEvents/:id`: Remove a weather event.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Start by opening an issue to discuss the change you wish to make.

## 📜 License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).
