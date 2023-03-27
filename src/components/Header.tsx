import { useUser } from '@auth0/nextjs-auth0/client';
import { LoginButton, LogoutButton, Profile } from '../auth'

export const Header = ({handleInfo}: { handleInfo: () => void }) => {

  const { user, error, isLoading } = useUser();
  console.log('AUTH OBJECT: ', useUser())
  if (user) {
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