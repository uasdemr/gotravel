import { Route, BrowserRouter, Routes } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const";

import Main from "../../pages/main/Main";
import Login from "../../pages/login/Login";
import Favorites from "../../pages/favorites/Favorites";
import NotFound from "../404/404";
import PrivateRoute from "../private-router/private-router";
import Layout from "../../pages/layout/Layout";
import Room from "../../pages/room/Room";

type AppProps = {
  placesToStayQuantity: number;
};

function App(props: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Main placesToStayQuantity={props.placesToStayQuantity} />}
          />

          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <Favorites />
              </PrivateRoute>
            }
          />

          <Route path={AppRoute.Offer} element={<Room />} />
        </Route>

        <Route path={AppRoute.NotFound} element={<NotFound />} />
        <Route path={AppRoute.Login} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
