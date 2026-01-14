import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/HomePage.tsx";
import AuthCallbackPage from "./pages/auth-callback/AuthCallbackPage.tsx";
import { axiosInstance } from "./lib/axios.ts";
// import { axiosInstance } from "./lib/axios.ts";

function App() {
  // Tell Clerk we are authenticated when sending requests (token from provider)

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authCallback" element={<AuthCallbackPage />} />
        <Route />
        <Route />
        <Route />
      </Routes>
    </>
  );
}

export default App;
