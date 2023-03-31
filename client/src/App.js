import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import NavBar from "./components/NavBar/Navbar";
import Welcome from "./components/Welcome/Welcome";
import Home from "./components/Home/Home";
import Error404 from "./components/Error/404/error404";
import About from "./components/About/About";
import AddActivities from "./components/Form/AddActivities/AddActivities";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <NavBar /> */}

        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/detail:id" component={Detail} />
            <Route exact path="/add-activities" component={AddActivities} />

            {/* En caso de que no exista la pagina redirecciona un 404 */}
            <Route path="*" component={Error404} />
        </Switch>
      </div>
      </BrowserRouter>
  );
}

export default App;
