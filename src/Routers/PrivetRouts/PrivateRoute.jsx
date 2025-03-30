// import { Children, useContext, useEffect } from "react";
// import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { AuthContext } from "../authentication/AuthProvider";

import { useContext } from "react";
 
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log(user);
    const location = useLocation();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!user || null) {
    return <Navigate to="/login" state={{ from: location }} replace />;

    // Redirect to home page if no user found
  } else {
  
    return children
  }
};

export default PrivateRoute;

 

// const PrivateRoute = ({children}) => {
// const {user} = useContext(AuthContext)

// if (!user){
//     return <Navigate to='/login'></Navigate>
// }

//  return children
// };

// export default PrivateRoute;