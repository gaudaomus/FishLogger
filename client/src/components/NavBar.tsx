import { Link } from "react-router-dom";
import NavLog from "./NavLog";
import NavReview from "./NavReview";
import SessionStatus from "./SessionStatus";

const NavBar = () => {
  return (
    <div className="bg-blue-600 h-24 flex justify-between items-center text-white text-xl">
      <Link to="/">
        <div className="ml-24">Fish Logger</div>
      </Link>
      <div className="flex">
        <NavLog />
        <NavReview />
        <SessionStatus />
      </div>
    </div>
  );
};

export default NavBar;
