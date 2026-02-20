import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
// import { SignUp } from '@clerk/clerk-react';

// const Register = () => {
//   return (
//     <SignUp path='/auth/register' routing='path' />
//   )
// }
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      toast.error("Passwords do not match", {
        position: "top-center",
      });
      return;
    }
    try {
      const res = await fetch("http://localhost:4000/api/auth/register", {
        method: "POST",
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 flex flex-col gap-4 items-center justify-center w-full max-w-md bg-secondary/50 shadow-md"
    >
      <div className="flex flex-col gap-2">
        <label className="font-semibold" htmlFor="name">
          Name
        </label>
        <input
          className="px-4 py-1 outline-none border border-primary/80 rounded w-full"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold" htmlFor="email">
          Email
        </label>
        <input
          className="px-4 py-1 outline-none border border-primary/80 rounded w-full"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold" htmlFor="password">
          Password
        </label>
        <input
          className="px-4 py-1 outline-none border border-primary/80 rounded w-full"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold" htmlFor="cpassword">
          Confirm Password
        </label>
        <input
          className="px-4 py-1 outline-none border border-primary/80 rounded w-full"
          type="text"
          id="cpassword"
          value={cpassword}
          onChange={(e) => setCpassword(e.target.value)}
          required
        />
      </div>
      <Button size="lg">Register</Button>
    </form>
  );
};

export default Register;
