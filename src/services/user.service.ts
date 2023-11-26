import { IUser } from '../interface/user.interface';
import  User  from '../model/user.model';

const createUser = async (userData: IUser): Promise<IUser> => {
  const existingUser = await User.isUserExists(userData.userId);
  if (existingUser) {
    throw new Error('User already exists');
  }

  const result = await User.create(userData);
  return result;
};
const getAllUsers = async (): Promise<IUser[]> => {
  const result = await User.find().select('-password');
  return result;
};

const getSingleUser = async (userId: string) => {
  const existingUser = await User.isUserExists(userId);
  if (!existingUser) {
    throw new Error('User not found');
  }
  const result = await User.findOne({ userId }).select('-password')

  return result;
};
const updateUser = async (
  userId: string,
  userData: IUser,
): Promise<IUser | null> => {
  const result = await User.findOneAndUpdate(userId, userData, {
    new: true,
    runValidator: true,
  });
  return result;
};
const deleteUser = async (userId: string): Promise<IUser | null> => {
  const result = await User.findOneAndDelete(userId);
  return result;
};
export const userServices = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
