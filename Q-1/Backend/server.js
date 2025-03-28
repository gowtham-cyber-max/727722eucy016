const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const connectToMongo=require("./DB/mongo");
const cookieParser = require('cookie-parser');

// middle
const app = express();
app.use(express.json());



//db-config
const conn=connectToMongo();

//routes
const numberRoutes=require('./Number/numberRoutes');

app.use("/numbers",numberRoutes);


//port 
app.listen(5000, () => {
    console.log('Server is running on port 5000'); 
  });