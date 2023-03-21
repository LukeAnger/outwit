import React, { useState } from 'react';
import Info from './Info.jsx';

export const Header = ({handleInfo}) => {



  return (
    <header id='head'>
      <div className='headerContainer'>
        <div></div>
        <h1 id='header'>Outwit</h1>
        <div id='infoButton' onClick={handleInfo} >?</div>
      </div>


    </header>
  );
}