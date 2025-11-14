import express from 'express';
const app = express();
const port = 3000;

import dotenv from 'dotenv';  
dotenv.config();

app.use(express.json());

import db from './config/db.js';

db();


app.get('/', (req, res) => {
  res.send('Hello World!');
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});