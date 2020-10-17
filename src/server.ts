import express from "express";

import "./database/connections";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {});

app.listen(3333);
