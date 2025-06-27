const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');   
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Hello, TEST SERVER!');    
});

app.get("/new", (req, res) => {
  res.send("This is a new route!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});


