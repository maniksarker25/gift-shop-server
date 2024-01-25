import { Schema, model } from 'mongoose';
import { TUser } from './auth.interface';

const userSchema = new Schema<TUser>({
  fullName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const User = model<TUser>('User', userSchema);
