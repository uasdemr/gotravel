import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import SignIn from "./sign-in/sign-in";
import SignOut from "./sign-out/sign-out";
import UserEmail from "./user-email/user-email";

function Header(): JSX.Element {
  const state = useAppSelector(state => state.offers)
  const {authorizationStatus} = state

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={'/'} >
              <img
                className="header__logo"
                src="/img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === 'AUTH' && <UserEmail />}
              {authorizationStatus === 'AUTH' && <SignOut />}
              {authorizationStatus !== 'AUTH' && <SignIn />}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
