// Use JSX code

import React from "react";
import ReactDOM from "react-dom/client";

const h1 = (
  <h1 id="heading" className="heading">
    Hello React from JSX
  </h1>
);

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(h1);
