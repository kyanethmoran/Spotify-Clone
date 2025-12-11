import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/HomePage.tsx";
import AuthCallbackPage from "./pages/auth-callback/AuthCallbackPage.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authCallbackPage" element={<AuthCallbackPage />} />
        <Route />
        <Route />
        <Route />
      </Routes>
    </>
  );
}

export default App;
