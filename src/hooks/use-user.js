import { useEffect, useState } from "react";

export const useUser = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    //extract token
    const token = localStorage.getItem("auth-token");
    //api call
    const fetchUser = async () => {
      const res = await fetch("http://localhost:4000/api/auth/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const userData = await res.json();
      setUser(userData.data || null);
      setIsLoading(false);
    };
    token && fetchUser();
  }, []);
  return { user, isLoading };
};
