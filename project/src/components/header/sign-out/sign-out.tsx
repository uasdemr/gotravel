import React, { SyntheticEvent } from 'react'
import { store } from '../../../store'
import { logoutAction } from '../../../store/api-actions'


const onClickHandler = (evt: SyntheticEvent) => {
  evt.preventDefault()
  store.dispatch(logoutAction())

}

 function SignOut() {
  return (
    <li className="header__nav-item">
      <a className="header__nav-link" href="/#" onClick={onClickHandler}>
        <span className="header__signout">Sign out</span>
      </a>
    </li>
  )
}

export default SignOut
