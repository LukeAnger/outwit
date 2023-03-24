import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { auth } from "./utils/config.js"

ReactDOM.render(
  <Auth0Provider
    domain={auth.AUTH0_DOMAIN}
    clientId={auth.AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.href
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);