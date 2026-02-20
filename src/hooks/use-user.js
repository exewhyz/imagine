import { useEffect } from "react";

export const useUser = () => {
  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    if (!token) {
      return { message: "You are not logged in", user: null };
    }
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
        return { message: userData.message, user: null };
      }

      return { message: userData.message, user: userData.data };
    };
    fetchUser();
  }, []);
};
