// Use React functional component

import React from "react";
import ReactDOM from "react-dom/client";

const HeadingComponent = () => {
  return <h1>Hello React, from functional component</h1>;
};

let root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(<HeadingComponent />);
