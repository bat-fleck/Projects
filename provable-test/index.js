const express = require("express");
const bodyParser = require("body-parser");
const points = require("./routes/api/getTokens");
const app = express();

// bodyParser Middleware
app.use(bodyParser.json());
app.use("/api/points",points);

app.get("/",(req,res)=>{
    res.send("Hello")
})
const port = process.env.PORT || 5000;
app.listen(port,()=>console.log(`Listening on Port: ${port}`))
