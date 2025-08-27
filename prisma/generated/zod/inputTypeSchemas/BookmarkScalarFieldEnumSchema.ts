import { z } from 'zod';

export const BookmarkScalarFieldEnumSchema = z.enum(['id','createdAt','userId','productId','updatedAt']);

export default BookmarkScalarFieldEnumSchema;
