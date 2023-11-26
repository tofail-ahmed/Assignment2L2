import { Model } from "mongoose";

export interface IUser {
  userId: number;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
 
}
export interface UserModel extends Model<IUser>{
  isUserExists(id: string): Promise<IUser | null>;
}

