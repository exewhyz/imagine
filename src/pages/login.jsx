import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { useUser } from "@/hooks/use-user";
// import { SignIn } from '@clerk/clerk-react'

// const Login = () => {
//   return (
//     <SignIn path='/auth/login' routing='path' />
//   )
// }

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user} = useUser();
  if(user && user._id){
    navigate("/")
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/api/auth/login", {
        headers:{
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if(!data.success){
        toast.error(data.message, {
          position: "top-center",
        });
      }else{
        toast.success(data.message, {
          position: "top-center",
        });
        const token = data.token;
        localStorage.setItem("auth-token", token)
        navigate("/")
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 items-center justify-center w-full max-w-md h-80 bg-secondary/50 shadow-md"
    >
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
        <label className="font-semibold" htmlFor="password">Password</label>
        <input
        className="px-4 py-1 outline-none border border-primary/80 rounded w-full"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <Button size="lg">Login</Button>
    </form>
  );
};

export default Login;
