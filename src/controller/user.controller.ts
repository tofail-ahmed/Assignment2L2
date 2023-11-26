import { Request, Response } from 'express';
import { userServices } from '../services/user.service';
import userValidationSchema from '../validation/zod.validation';

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const zodParsedData=userValidationSchema.parse(userData)
    const result = await userServices.createUser(zodParsedData);
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(404).json({
      success: 'false',
      message: error.message||'User not found',
      error: {
        code: 404,
        desciption: error.message || 'User not found',
      },
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUsers();
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully',
      data: result,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
    res.status(404).json({
      success: 'false',
      message: 'User not found',
      error: {
        code: 404,
        desciption: 'User not found',
      },
    });
  }
};
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
   
    const result = await userServices.getSingleUser(userId);
    res.status(200).json({
      success: true,
      message: ' User fetched successfully',
      data: result,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
    res.status(404).json({
      success: 'false',
      message: 'User not found',
      error: {
        code: 404,
        desciption: 'User not found',
      },
    });
  }
};
const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const userData = req.body;
    const result = await userServices.updateUser(userId, userData);
    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      data: result,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
    res.status(404).json({
      success: 'false',
      message: 'User not found',
      error: {
        code: 404,
        desciption: 'User not found',
      },
    });
  }
};
const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    await userServices.deleteUser(userId);
    res.status(200).json({
      success: true,
      message: ' user deleted successfully',
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
    res.status(404).json({
      success: 'false',
      message: 'User not found',
      error: {
        code: 404,
        desciption: 'User not found',
      },
    });
  }
};

export const userController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
