import React from "react";
import SignCard from "./SignCard";

function Signs(props) {
  console.log(props);
  return (
    <div className="sign-div">
      {props.signs.map(sign => (
        <SignCard key={sign.id} data={sign} />
      ))}
    </div>
  );
}

export default Signs;
