import { z } from 'zod';

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.number().int(),
  email: z.string().email().max(255),
  name: z.string().min(1).max(30).regex(/[a-zA-Z]/, {message: "英字を含めてください"}).regex(/[0-9]/, {message: "数字を含めてください"}),
  password: z.string().min(1).max(30),
  image: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// USER PARTIAL SCHEMA
/////////////////////////////////////////

export const UserPartialSchema = UserSchema.partial()

export type UserPartial = z.infer<typeof UserPartialSchema>

export default UserSchema;
