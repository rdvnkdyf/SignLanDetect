import React from "react";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  const routeToSigns = event => {
    history.push("/signlan");
  };
  return (
    <div className="home-page">
      <h1>SignLanDetect Uygulamasına Hoş Geldiniz</h1>
      <button onClick={routeToSigns}>Giriş</button>
    </div>
  );
};

export default HomePage;
