import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton, LogoutButton, Profile } from '../auth'
import Info from './Info.jsx';

export const Header = ({handleInfo}) => {

  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return (
      <header id='head'>
        <div className='headerContainer'>
          <LogoutButton />
          <h1 id='header'>Outwit</h1>
          <div id='infoButton' onClick={handleInfo} >?</div>
        </div>
        <Profile />
      </header>
    );
  } else {
    return (
      <header id='head'>
        <div className='headerContainer'>
          <LoginButton />
          <h1 id='header'>Outwit</h1>
          <div id='infoButton' onClick={handleInfo} >?</div>
        </div>
      </header>
    );
  }
}