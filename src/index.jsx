import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-ygryw3g2ezr5ovfp.us.auth0.com"
    clientId="dBspQB4T8zkhMWgv6RaGd34W0YrlCf2C"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);