import { Route, Routes } from "react-router-dom";
import { AppRoute } from "../../const";

import Main from "../../pages/main/Main";
import Login from "../../pages/login/Login";
import Favorites from "../../pages/favorites/Favorites";
import NotFound from "../404/404";
import PrivateRoute from "../private-router/private-router";
import Layout from "../../pages/layout/Layout";
import Room from "../../pages/room/Room";
import { useAppSelector } from "../../hooks";
import LoadingScreen from "../loading-screen/loading-screen";
import HistoryRouter from '../history-route/history-route';
import browserHistory from "../../browser-history";

type AppProps = {
  placesToStayQuantity: number;
};

function App({ placesToStayQuantity }: AppProps): JSX.Element {
  const { authorizationStatus, isDataLoaded } = useAppSelector((state) => state.offers);
  if (authorizationStatus === 'UNKNOWN' || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Main />}
          />

          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.OfferId}
            element={<Room />}
          />
        </Route>
        <Route path={AppRoute.NotFound} element={<NotFound />} />
        <Route path={AppRoute.Login} element={<Login />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
