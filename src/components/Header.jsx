import React, { useState } from 'react';
import Info from './Info.jsx';

const Header = () => {

  const [info, setInfo] = useState(true);


  const handleInfo = () => {
    setInfo(!info);
  };

  return (
    <header id='head'>
      <div className='headerContainer'>
        <div></div>
        <h1 id='header'>Outwit</h1>
        <div id='infoButton' onClick={handleInfo} >?</div>
        {info ? <Info /> : null}
      </div>


    </header>
  );
}

export default Header;