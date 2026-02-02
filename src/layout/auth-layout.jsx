import React from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <main className="min-h-[calc(100vh-3.5rem)] w-full flex flex-col items-center justify-center p-4">
      <Outlet />
    </main>
  );
};

export default AuthLayout;
