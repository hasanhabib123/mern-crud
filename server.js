import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';


import Connection from './database/db.js';
import Routes from './server/route.js';

const app = express();

dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.REMOTE_CLIENT_APP, credentials: true }));
app.use('/', Routes);




//step 3: Heroku

if(process.env.NODE_ENV==="production"){
    app.use(express.static("client/build"));
    app.get("*",(request,response)=>{
        response.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'));
    })
}

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const PORT = process.env.PORT || 8000;

const URL = process.env.MONGODB_URI || `mongodb://${USERNAME}:${PASSWORD}@ac-qkbrlea-shard-00-00.0lqsoid.mongodb.net:27017,ac-qkbrlea-shard-00-01.0lqsoid.mongodb.net:27017,ac-qkbrlea-shard-00-02.0lqsoid.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-3ycmr0-shard-0&authSource=admin&retryWrites=true&w=majority`;

Connection(URL);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));