import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
    id='logoutButton'
    onClick={() => logout({ logoutParams: { returnTo: 'https://lukeanger.com/outwit' } })}>
      Log Out
    </button>
  );
};

export default LogoutButton;