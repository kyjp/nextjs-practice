import React, { Suspense } from "react";
import ClientComponent from "./ClientComponent";
import ServerComponent from "./ServerComponent";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SignupForm from "./features/auth/components/SignupForm";

const Home = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <ClientComponent />
      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
          <CardDescription>Card description goes here</CardDescription>
        </CardHeader>
        <CardContent>
          <SignupForm />
        </CardContent>
        <CardFooter>Card footer content</CardFooter>
      </Card>
      <Suspense fallback={<p>Loading users...</p>}>
        <ServerComponent />
      </Suspense>
    </div>
  );
};

export default Home;
