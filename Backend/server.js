const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));

// Credentials
// Username: gadwalpasupati345@gmail.com
// Password: 123456
// Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NTY1YTE5OGFjNmYxYTY2NmFiMDBkMyIsImlhdCI6MTcxNjk0MDI4MywiZXhwIjoxNzE5NTMyMjgzfQ.LOuCxuwmcVSfYARrI06wO_7SraOxzpeIJx0uLWTQ7GQ
