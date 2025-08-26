"use client";
import React, { useEffect } from "react";

type PropsType = {
  children: React.ReactNode;
};

const ZodProvider = ({ children }: PropsType) => {
  useEffect(() => {
    // Initialize Zod here
    // @ts-ignore
    z.setErrorMap(customErrorMap);
  }, []);

  return <>{children}</>;
};

export default ZodProvider;
