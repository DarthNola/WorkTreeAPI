import express from 'express';
import { connect } from 'mongoose';
import { employeeRouter } from "./routes/employeeRouter";
import bodyParser from 'body-parser';
const app = express();
const Port = 2999;
const connectionString = "mongodb://localhost:27017/the-new-hive";
async function run() {
    await connect(connectionString);
}
app.use(bodyParser.json());
app.use("/", employeeRouter);
app.listen(Port, () => {
    console.log(`Listening on http://localhost:${Port}`);
});
run().catch(err => console.log(err));
