const express = require("express");
const errorhandler = require("./middleware/errorhandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDB();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json()); //parser to parse the data string we receive from the client
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorhandler);

app.listen(PORT, () => {
    console.log("Server running on PORT", PORT);
});