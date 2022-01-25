import React from "react";
import "./SignCard.css";
import { Button } from 'react-bootstrap';
const SignCard = props => {
  console.log("props", props);
  // const { title, director, metascore, stars } = props;
  return (
    <div className="sign-card">
      <h1>{props.data.title}</h1>
      <img src={props.data.images} className="image"></img>
      <h1>Alıştırmaya başla:</h1>
      <div className="d-grid gap-2">
  <Button variant="primary" size="lg">
    <a href={props.data.link}>Alıştırmaya gir</a>
  </Button>
</div>
      
 
      
    </div>
  );
};

export default SignCard;
