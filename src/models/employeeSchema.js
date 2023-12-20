import { Schema, model, Types } from 'mongoose';
const employeeSchema = new Schema({
    employeeNumber: { type: String, unique: true, required: true },
    // Explicitly setting _id to employeeNumber
    _id: { type: String, alias: 'employeeNumber' },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    birthDate: { type: Date },
    salary: { type: Number },
    role: { type: String },
    reportingLineManager: { type: Types.ObjectId, ref: 'Employee' },
});
export const Employee = model('Employee', employeeSchema);
