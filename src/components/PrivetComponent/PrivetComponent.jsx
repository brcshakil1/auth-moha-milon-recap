import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { PropTypes } from "prop-types";
import { NavLink } from "react-router-dom";

const PrivetComponent = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <span className="loading loading-infinity loading-lg"></span>;
  }

  if (user) {
    return children;
  }

  return <NavLink to="/login"></NavLink>;
};
export default PrivetComponent;

PrivetComponent.propTypes = {
  children: PropTypes.node,
};
