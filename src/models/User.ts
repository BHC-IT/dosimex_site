import IUser from '../interfaces/IUser'
import * as mongoose from 'mongoose'


const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
});

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);