import { IUser } from '../interface/user.interface';
import User from '../model/user.model';

const createUser = async (userData: IUser): Promise<IUser> => {
  const result = await User.create(userData);
  return result;
};
const getAllUsers = async (): Promise<IUser[]> => {
  const result = await User.find();
  return result;
};
// const getSingleUser = async (userId: string): Promise<IUser | null> => {
//   const result = await User.findById(userId);
//   return result;
// };
const getSingleUser = async (userId: string) => {
  const result = await User.findOne({ userId });
// const result=await User.aggregate([{$match:{userId:userId}}])

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
const deleteUser = async (userid: string): Promise<IUser | null> => {
  const result = await User.findOneAndDelete(userid);
  return result;
};
export const userServices = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
