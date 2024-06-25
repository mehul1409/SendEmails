const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes/router');
const app = express();
const cors = require('cors');
const dbConnection = require('./database/dbConnection.js');
const sendEmails = require('./sendEmails.js');

dotenv.config();

app.use(express.json());
app.use(cors());
app.use('/v1',router);

dbConnection();

// automatically send emails 

// sendEmails();  

// uncomment when want to use


app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log(`Error while starting the server ${err}`)
    }else{
        console.log(`server is starting at port no ${process.env.PORT}`);
    }
})
