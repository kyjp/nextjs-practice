import prisma from "../../../lib/prisma";

export async function POST(request: Request) {
  const res = await request.json();
  const { name, email, password } = res;

  if (name === null) {
    return Response.json({ error: "Name is required" }, { status: 400 });
  }
  if (name.length <= 1) {
    return Response.json({ error: "Name must be at least 2 characters long" }, { status: 400 });
  }
  if (email === null) {
    return Response.json({ error: "Email is required" }, { status: 400 });
  }
  if (password === null) {
    return Response.json({ error: "Password is required" }, { status: 400 });
  }

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
  return Response.json(user);
}
