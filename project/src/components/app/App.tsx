import { Route, BrowserRouter, Routes } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const";

import Main from "../../pages/main/Main";
import Login from "../../pages/login/Login";
import Favorites from "../../pages/favorites/Favorites";
import NotFound from "../404/404";
import PrivateRoute from "../private-router/private-router";
import Layout from "../../pages/layout/Layout";
import Room from "../../pages/room/Room";
import { useAppSelector } from "../../hooks";

type AppProps = {
  placesToStayQuantity: number;
};

function App({ placesToStayQuantity }: AppProps): JSX.Element {
  const {offers, reviews} = useAppSelector(state => state)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Main />}
          />

          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <Favorites offers={offers.offers}/>
              </PrivateRoute>
            }
          />

          <Route
            path={AppRoute.Offers}
            element={
              <Room
                authorizationStatus={AuthorizationStatus.Auth}
                offers={offers.offers}
                reviews={reviews.reviews}
              />
            }
          >
            <Route
            path={AppRoute.OfferId}
            element={
              <Room
                authorizationStatus={AuthorizationStatus.Auth}
                offers={offers.offers}
                reviews={reviews.reviews}
              />
            }
          />  
          </Route>


        </Route>

        <Route path={AppRoute.NotFound} element={<NotFound />} />
        <Route path={AppRoute.Login} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;