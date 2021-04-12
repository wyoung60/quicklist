import React from "react";
import { useHistory } from "react-router-dom";

import { GoogleLogin } from "react-google-login";
// refresh token
import { refreshTokenSetup } from "../../utils/refreshToken";

const clientId =
  "659871250507-bokvnt4700ki1lu59kp9h50ccro3g721.apps.googleusercontent.com";

function Login({ login }) {
  const history = useHistory();
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    login(res.profileObj.googleId);
    history.push("/");

    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
