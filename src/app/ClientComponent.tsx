"use client";
import React, { useEffect, useState } from "react";
import { createUserAction, CreateUserResult } from "./create-user-action";
import { SubmitHandler, useForm } from "react-hook-form";
import z, { set } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useHookFormAction } from "@next-safe-action/adapter-react-hook-form/hooks";

const CreateUserSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }).max(30),
  email: z.string().email({ message: "Invalid email address" }).max(100),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }).max(100),
});

type CreateUserData = z.infer<typeof CreateUserSchema>;

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const ClientComponent = () => {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState<CreateUserResult | null>(null);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { form, action, handleSubmitWithAction, resetFormAndAction } = useHookFormAction(
    createUserAction,
    zodResolver(CreateUserSchema),
    {
      actionProps: {
        onSuccess: ({ data }) => {
          if (data === null) return;
          setResult(data);
        },
      },
    }
  );
  const onChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const {
    register,
    formState: { errors },
  } = form;
  return (
    <>
      <p className="text-center">{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <form onSubmit={handleSubmitWithAction}>
        <input className="border" type="text" {...register("name")} />
        {errors.name !== null && <span>{errors.name?.message}</span>}
        <input className="border" type="email" {...register("email")} />
        {errors.email !== null && <span>{errors.email?.message}</span>}
        <input className="border" type="password" {...register("password")} />
        {errors.password !== null && <span>{errors.password?.message}</span>}
        {result != null && <p>{result.message}</p>}
        <button type="submit">{action?.isPending ? "Submitting..." : "Submit"}</button>
      </form>
    </>
  );
};

export default ClientComponent;
