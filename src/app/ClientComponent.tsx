"use client";
import React, { use, useEffect, useState } from "react";

const ClientComponent = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const onSubmit = () => {
    fetch("/users", { method: "POST", body: JSON.stringify(data) }).then((res) => {
      res.json().then((data) => {
        console.log(data);
      });
    });
  };
  return (
    <>
      <p className="text-center">{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <input className="border" type="text" name="name" value={data.name} onChange={onChangeData} />
      <input
        className="border"
        type="text"
        name="email"
        value={data.email}
        onChange={onChangeData}
      />
      <input
        className="border"
        type="password"
        name="password"
        value={data.password}
        onChange={onChangeData}
      />
      <button onClick={onSubmit}>Submit</button>
    </>
  );
};

export default ClientComponent;
