import { useEffect, useState } from "react";

export const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    //extract token
    const token = localStorage.getItem("auth-token");
    if (!token) {
      return { message: "You are not logged in", user: null };
    }
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
      if (!userData.success) {
        const data = { message: userData.message, user: null };
        setUser(data);
      }
      const data = { message: userData.message, user: userData.data };
      setUser(data);
    };
    fetchUser();
    return {user}
  }, []);
};
