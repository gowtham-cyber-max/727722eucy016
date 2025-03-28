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
const externalRoutes=require('./external/externalRouter');

app.use("/external",externalRoutes);


//port 
app.listen(5000, () => {
    console.log('Server is running on port 5000'); 
  });