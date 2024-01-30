import { Outlet } from "react-router-dom";
import { Header } from "./Header";

const MainLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};
export default MainLayout;
