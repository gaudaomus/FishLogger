import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SessionStatus = () => {
  const [signedIn, setSignedIn] = useState(false);
  let signInButton;
  if (signedIn) {
    signInButton = <Link to="/record">Logged In</Link>;
  } else {
    signInButton = <Link to="/signin">Sign In</Link>;
  }

  return <div className="ml-12 mr-24">{signInButton}</div>;
};

export default SessionStatus;
