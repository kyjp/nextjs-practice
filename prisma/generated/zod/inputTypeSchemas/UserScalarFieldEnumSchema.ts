import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','email','name','password','image','createdAt','updatedAt']);

export default UserScalarFieldEnumSchema;
