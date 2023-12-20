import  express from 'express';
import {creatEemployee ,getAllEmployees,getOneEmployees,updateEmployees,deleteEmployees} from "../controllers/employeeController.js";

export  const  employeeRouter = express.Router();

employeeRouter.post("/employees",creatEemployee);
employeeRouter.get("/employees", getAllEmployees);
employeeRouter.get("/employees/:employeeNumber",getOneEmployees);
employeeRouter.patch("/employees/:employeeNumber", updateEmployees);
employeeRouter.delete("/employees/:employeeNumber",deleteEmployees);

