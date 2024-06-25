const mongoose = require('mongoose');

const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName:'cice',
    }).then(()=>{
        console.log("Successfully Connected to CICE Database!");
    }).catch(error=>{
        console.log("Database connection error!");
    })    
}

module.exports = dbConnection;