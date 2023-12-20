import express from 'express';
import { creatEemployee, getAllEmployees, getOneEmployees, updateEmployees, deleteEmployees } from "../controllers/employeeController.js";
export const employeeRouter = express.Router();
employeeRouter.post("/", creatEemployee);
employeeRouter.get("/employees", getAllEmployees);
employeeRouter.get("/employees/:id", getOneEmployees);
employeeRouter.patch("/employees/:id", updateEmployees);
employeeRouter.delete("/employees/:id", deleteEmployees);
