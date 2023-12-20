import { Schema, model, Document, Types } from 'mongoose';

interface EmployeeModel extends Document {
    employeeNumber: string;
    name: string;
    surname: string;
    email: string;
    birthDate?: Date;
    salary?: number;
    role?: string;
    reportingLineManager?: string;
    defaultImage?: string;
}

const employeeSchema = new Schema<EmployeeModel>({
    employeeNumber: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: {type: String ,required:true},
    birthDate: { type: Date },
    salary: { type: Number },
    role: { type: String },
    reportingLineManager: { type: String },
    defaultImage: { type: String }
});


export const Employee = model<EmployeeModel>('Employee', employeeSchema);
