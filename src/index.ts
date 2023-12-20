import express, { Express} from 'express';
import { connect } from 'mongoose';
import{employeeRouter} from './routes/employeeRouter.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

const  app : Express = express();
dotenv.config();
const Port = process.env.PORT ||"";
const connectionString = process.env.CONNECTION_STRING|| ""



async function run() {
    await connect(connectionString);
}
app.use(cors());

app.use(bodyParser.json());
app.use("/", employeeRouter)


app.listen(Port, () => {
    console.log(`Listening on http://localhost:${Port}`);
});

run().catch(err => console.log(err));