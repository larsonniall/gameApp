import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
//import Home from "./home";
import "./styles/index.css";
import AuthApi from "./utils/AuthApi";

function Routers()  {

    const [auth, setAuth] = useState(false);
    return (
      <AuthApi.Provider value={{auth, setAuth}}>
         <Router>
        <Routes/>
        
      </Router>
      </AuthApi.Provider>
     
    );

}
export default Routers;
