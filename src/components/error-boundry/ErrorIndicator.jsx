import React from "react";
import "./error-indicator.scss";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <span className="boom">BOOM!</span>
      <span>Something has gone terribly wrong</span>
      <span>
        (but we already sent <i className="fas fa-plane-departure"></i>
        {"\u00A0"} to fix it)
      </span>
    </div>
  );
};

export default ErrorIndicator;
