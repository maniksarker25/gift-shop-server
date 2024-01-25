/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import { TUser } from './auth.interface';
import bcrypt from 'bcrypt';
import config from '../../config';
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

// middleware for password hashed
userSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

//
userSchema.post('save', function (doc, next) {
  doc.set('password', undefined);
  next();
});

export const User = model<TUser>('User', userSchema);
