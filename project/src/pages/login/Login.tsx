import { AnyAction } from '@reduxjs/toolkit';
import { MouseEvent, ChangeEvent, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import {loginAction} from '../../store/api-actions'
import {store} from '../../store/index';

function LogIn(): JSX.Element {
  const navigate = useNavigate()
  const authorizationStatus = useAppSelector(state => state.offers.authorizationStatus)

  useEffect(() => {
    if(authorizationStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Main)
    }

  }, [authorizationStatus, navigate])

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                    setEmail(evt.target.value)}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                    setPassword(evt.target.value)}
                  placeholder="Password"
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                onClick={(evt: MouseEvent) => {
                  evt.preventDefault();
                  const tempEmail = email.trim();
                  const tempPassword = password.trim();
                  store.dispatch(loginAction({login: tempEmail, password: tempPassword}) as unknown as AnyAction);
                  navigate(AppRoute.Main)
                }}
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LogIn;
