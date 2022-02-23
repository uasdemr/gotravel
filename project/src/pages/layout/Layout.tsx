import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";

function Layout(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
