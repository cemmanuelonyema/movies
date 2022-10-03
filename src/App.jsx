import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
};
