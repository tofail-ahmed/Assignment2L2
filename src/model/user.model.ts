import { Schema, model, Document } from 'mongoose';
import { IUser, UserModel } from '../interface/user.interface';
import bcrypt from 'bcrypt';
import config from '../config';

const userSchema = new Schema<IUser, UserModel>({
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

userSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round),
  );
  next();
});
userSchema.post('save', function (doc, next) {
  // console.log(this, 'post hook:we saved  data');
  doc.password = ' ';
  next();
});

userSchema.statics.isUserExists = async function (userId: string) {
  const existingUSer = await this.findOne({ userId });
  return existingUSer;
};
const User = model<IUser, UserModel>('User', userSchema);
export default User;
