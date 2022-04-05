const express = require('express');
const app = express();
app.use(express.json());

const registeruserController = require('./Controllers/registeruserController');
const loginController = require('./Controllers/loginController');
const retrieveController = require('./Controllers/retrieveController');
const updateController = require('./Controllers/updateController');

const db=require('./db/dbconn');

app.post('/register',registeruserController.registeruserfun);
app.post('/login',loginController.logging_in);
app.get('/show_allusers',retrieveController.retrieve_allusers);
app.post('/show_user_details',retrieveController.retrievedata);
app.post('/update_user_data',updateController.updatedata);


app.listen(7099,()=>{
    console.log("Server started and running at port number 7099");
    Connect();
})


async function Connect(){

    await db.connectToDB()
    console.log("database creation is done");
}
