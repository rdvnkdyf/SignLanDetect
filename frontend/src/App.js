import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";

import "./styles.css";
import Signs from "./components/Signs";
import HomePage from "./components/HomePage";
import { signs } from "./data";

function App() {
  const [data] = useState(signs);
  // console.log(data);
  return (
    <div>
      <nav>
        <h1>SignLanDetect Web Uygulaması</h1>
        <div className="nav-links">
          <Link to="/" className="link">
           Ana Sayfa
          </Link>
          <Link to="/signlan" className="link">
           İşaret Dili
          </Link>
        </div>
      </nav>

      <Switch>
        <Route path="/signlan">
          <Signs signs={data} />
        </Route>
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
