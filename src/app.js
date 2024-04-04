import { databaseConnection } from "./database.js"
import { start } from "./server.js";
import express from 'express';



const init = ()=>{
    databaseConnection();
    const app = express();
    start(app);
}

init();