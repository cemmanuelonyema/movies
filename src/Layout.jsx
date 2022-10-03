import { Outlet } from "react-router-dom";
import { Header } from "./component/layout/header/Header";

export const Layout = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};
