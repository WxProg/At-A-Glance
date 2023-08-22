require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const PORT = require("./config");

const app = express();

main().catch((err) => console.error("Connection error:", err.message));

async function main() {
  await mongoose.connect(process.env.MONGODB_DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB database");
}

app.use(express.json());

const weatherEventsRouter = require("./routes/weatherEvents");
app.use("/weatherEvents", weatherEventsRouter);

app.listen(PORT, () => {
  console.log("API started listening on PORT:", PORT);
});
