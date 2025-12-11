import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import { axiosInstance } from "@/lib/axios";

const updateApiToken = (token: string | null) => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};

export const AuthProvider = () => {
  const { getToken, userId } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = await getToken();
        updateApiToken(token);

        // if(token){
        // todo
        // }
      } catch (error: any) {
        updateApiToken(null);
        console.log("Error in auth provider: ", error);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, [getToken]);

  return <div>AuthProvider</div>;
};
