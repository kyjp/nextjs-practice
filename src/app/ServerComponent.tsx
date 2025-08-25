import React from "react";
import prisma from "../lib/prisma";
import { User } from "@prisma/client";
import { createUserActionFromServerAction } from "./create-user-action";

const getUsers = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return await prisma.user.findMany();
};

const ServerComponent = async () => {
  const users = await getUsers();
  return (
    <div>
      <div>
        {users.map((user: User) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
      <div>
        <form action={createUserActionFromServerAction}>
          <input type="text" className="border" name="name" />
          <input type="email" className="border" name="email" />
          <input type="password" className="border" name="password" />
          <button type="submit">Create User</button>
        </form>
      </div>
    </div>
  );
};

export default ServerComponent;
