import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/HomePage.tsx";
import AuthCallbackPage from "./pages/auth-callback/AuthCallbackPage.tsx";
// import { axiosInstance } from "./lib/axios.ts";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import MainLayout from "./layout/MainLayout.tsx";
// import { axiosInstance } from "./lib/axios.ts";

function App() {
  // Tell Clerk we are authenticated when sending requests (token from provider)

  return (
    <>
      <Routes>
        <Route
          path="/sso-callback"
          element={
            <AuthenticateWithRedirectCallback signUpForceRedirectUrl="/auth-callback" />
          }
        />
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
