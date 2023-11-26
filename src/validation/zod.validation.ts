import { z } from 'zod';
const UserAddressSchema = z.object({
  street: z.string().min(1),
  city: z.string().min(1),
  country: z.string().min(1),
});

const UserFullNameSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
});

const userValidationSchema = z.object({
  userId: z.number(),
  username: z.string(),
  password: z.string(),
  fullName: UserFullNameSchema,
  age: z.number(),
  email: z.string().email(),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: UserAddressSchema,
});
export default userValidationSchema;
