import express from 'express';
import cors from 'cors';
// const express = require("express");
const app = express();
app.use(cors());
const port = 3001;

app.get('/', (req, res) => {
// app.get('/', (req : any, res : any) => {
  res.json({message:'Hello World! haha'});
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});