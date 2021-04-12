import React from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogout } from "react-google-login";

const clientId =
  "659871250507-bokvnt4700ki1lu59kp9h50ccro3g721.apps.googleusercontent.com";

function Logout({ logout }) {
  const history = useHistory();
  const onSuccess = () => {
    history.push("/");
    console.log("Logout made successfully");
    logout();
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
