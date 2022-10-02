import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Login } from "./pages/login/Login";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};
