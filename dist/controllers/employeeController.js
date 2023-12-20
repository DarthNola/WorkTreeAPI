import { Employee } from "../models/employeeSchema.js";
export const creatEemployee = async (request, response) => {
    try {
        const employee = new Employee(request.body);
        const savedEmployee = await employee.save();
        response.status(201).send(savedEmployee);
    }
    catch (error) {
        response.status(400).send(error);
    }
};
export const getAllEmployees = async (request, response) => {
    try {
        const employees = await Employee.find();
        response.send(employees);
    }
    catch (error) {
        response.status(500).send(error);
    }
};
export const getOneEmployees = async (request, response) => {
    try {
        const employee = await Employee.findOne({ employeeNumber: request.params.employeeNumber });
        if (!employee) {
            return response.status(404).send({ error: 'Employee not found' });
        }
        response.send(employee);
    }
    catch (error) {
        response.status(500).send(error);
    }
};
export const updateEmployees = async (request, response) => {
    try {
        const employee = await Employee.findOneAndUpdate({ employeeNumber: request.params.employeeNumber }, request.body, { new: true });
        if (!employee) {
            return response.status(404).send({ error: 'Employee not found' });
        }
        response.send(employee);
    }
    catch (error) {
        response.status(400).send(error);
    }
};
export const deleteEmployees = async (request, response) => {
    try {
        const employee = await Employee.findOneAndDelete({ employeeNumber: request.params.employeeNumber });
        if (!employee) {
            return response.status(404).send({ error: 'Employee not found' });
        }
        response.send(employee);
    }
    catch (error) {
        response.status(500).send(error);
    }
};
//# sourceMappingURL=employeeController.js.map