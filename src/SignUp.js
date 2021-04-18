import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignUp = () => {
  const { user } = useAuth0();

  console.log(user);

  return <button>Sign Up</button>;
};

export default SignUp;