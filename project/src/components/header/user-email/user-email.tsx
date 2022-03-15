import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../../hooks'
import { getUser } from '../../../services/user';

function UserEmail() {
  const localStoreUser: string = getUser();
  const reduxProfile = useAppSelector(state => state.profile.user)

  const [profileState, setProfileState] = useState(reduxProfile)

  useEffect(() => {
    if(localStoreUser) {
      setProfileState(JSON.parse(localStoreUser))
    }

  }, [localStoreUser])

  return (
    <li className="header__nav-item user">
      <a
        className="header__nav-link header__nav-link--profile"
        href="/favorites"
      >
        <div className="header__avatar-wrapper user__avatar-wrapper">
          {profileState.avatarUrl && <img src={profileState.avatarUrl} alt="Avatar" />}
        </div>
        <span className="header__user-name user__name">
          {profileState.email}
        </span>
      </a>
    </li>
  )
}

export default UserEmail
