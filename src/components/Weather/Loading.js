import React from "react";
import spinner from "../../animations/spinner.gif";

const Loading = () => {
  return (
    <div>
      <img className="loading" src={spinner} alt="logo" />
    </div>
  );
};

export default Loading;
