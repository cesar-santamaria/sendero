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

// netlify
app.use(
  cors({
    origin: "https://main--calm-eclair-804e4b.netlify.app/",
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

//Render
const allowedOrigins = [
  "https://sendero-client.onrender.com",
  "https://main--calm-eclair-804e4b.netlify.app/",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Check if the origin is in the allowed list; allow requests from all other origins with '*'
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

// PORT
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT} 🙉`);
});
