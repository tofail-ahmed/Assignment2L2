import { Schema, model } from 'mongoose';
import { IUser } from '../interface/user.interface';

const userSchema = new Schema<IUser>({
  userId: {
    type: Number,
    unique: true,
    required: [true, 'Please provide an unique userId'],
  },
  username: {
    type: String,
    unique: true,
    required: [true, 'Please provide an unique username'],
  },
  password: {
    type: String,
    required: [true, 'Please provide your password'],
  },
  fullName: {
    firstName: {
      type: String,
      required: [true, 'Please provide your firstName'],
    },
    lastName: {
      type: String,
      required: [true, 'Please provide your firstName'],
    },
  },
  age: {
    type: Number,
    required: [true, 'Please provide your age'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  hobbies: [
    {
      type: String,
      required: [true, 'Please provide your hobby'],
    },
  ],
  address: {
    street: {
      type: String,
      required: [true, 'Please provide your street'],
    },
    city: {
      type: String,
      required: [true, 'Please provide your city'],
    },
    country: {
      type: String,
      required: [true, 'Please provide your country'],
    },
  },
});
const User = model<IUser>('User', userSchema);
export default User;
