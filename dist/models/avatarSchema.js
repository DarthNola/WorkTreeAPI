import { Schema, model } from 'mongoose';
const avatarSchema = new Schema({
    employeeID: { type: Schema.Types.ObjectId, ref: 'Employee', unique: true, required: true },
    avatarURL: { type: String },
});
export const Avatar = model('Avatar', avatarSchema);
//# sourceMappingURL=avatarSchema.js.map