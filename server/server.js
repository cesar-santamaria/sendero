const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");
const jobRoutes = require("./routes/jobs");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const URI = process.env.MONGO_URI;

mongoose.connect(URI, { useNewUrlParser: true }, () => {
  console.log("connected to mongoDB 💻");
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected 🦦");
});

// vercel
app.use(
  cors({
    origin: "https://sendero-cesar-santamaria.vercel.app",
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

// HTTP Request logger
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//User Routes
app.use("/api/users", userRoutes);

//Job Routes
app.use("/api/jobs", jobRoutes);

//server frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "./", "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => res.send("Please node_env to production"));
}

// PORT
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT} 🙉`);
});
