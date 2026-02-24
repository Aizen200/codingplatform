const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const authRoutes = require("./authentication/auth");
const questionroutes = require("./routes/Route");
const profileroutes = require("./routes/Profile");
const submissionroutes = require("./routes/Submit");
const solvingroute = require("./routes/Solve");
const seed = require("./seed/Seedquestion");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected");

    app.listen(PORT, () => {
      console.log("Server is running...");
    });

  } catch (err) {
    console.error("Error starting server:", err);
    process.exit(1);
  }
};

startServer();

app.use("/auth", authRoutes);
app.use("/questions", questionroutes);
app.use("/submission", submissionroutes);
app.use("/solve", solvingroute);
app.use("/user", profileroutes);