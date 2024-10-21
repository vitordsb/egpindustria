import express from "express";

const app = express();

app.listen(8080, () => {
    console.log("Conectado");
})

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World");
})