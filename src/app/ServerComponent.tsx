import React from "react";
import prisma from "../../lib/prisma";
import { User } from "@/generated/prisma";

const getUsers = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return await prisma.user.findMany();
};

const ServerComponent = async () => {
  const users = await getUsers();
  return (
    <div>
      {users.map((user: User) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default ServerComponent;
