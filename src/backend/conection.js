import axios from "axios";
import express from "express";

const app = express();
const axios = axios()

app.listen(8080, () => console.log("Server running at 8080"))

app.get("/api", (req, res) => { 
    axios.get("http://localhost:8080/api").then(response => {
        res.send(response.data)
    })
})