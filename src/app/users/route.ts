import z from "zod";
import prisma from "../../../lib/prisma";

const createUserSchema = z.object({
  name: z.string().min(1).max(30),
  email: z.string().email().max(30),
  password: z.string().min(8).max(100),
});

export async function POST(request: Request) {
  const res = await request.json();
  const validation = createUserSchema.safeParse(res);

  if (!validation.success) {
    return Response.json({ error: validation.error.format() }, { status: 400 });
  }

  const { name, email, password } = validation.data;

  // if (name === null) {
  //   return Response.json({ error: "Name is required" }, { status: 400 });
  // }
  // if (name.length <= 1) {
  //   return Response.json({ error: "Name must be at least 2 characters long" }, { status: 400 });
  // }
  // if (email === null) {
  //   return Response.json({ error: "Email is required" }, { status: 400 });
  // }
  // if (password === null) {
  //   return Response.json({ error: "Password is required" }, { status: 400 });
  // }

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
  return Response.json(user);
}
