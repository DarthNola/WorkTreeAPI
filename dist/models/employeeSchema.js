import { Schema, model } from 'mongoose';
const employeeSchema = new Schema({
    employeeNumber: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    birthDate: { type: Date },
    salary: { type: Number },
    role: { type: String },
    reportingLineManager: { type: String },
    defaultImage: { type: String }
});
export const Employee = model('Employee', employeeSchema);
//# sourceMappingURL=employeeSchema.js.map