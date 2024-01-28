import React from "react";
import ReactDOM from "react-dom/client";

const h1 = React.createElement(
  "h1",
  { id: "main-heading", className: "heading" },
  "Hello React"
);

const root = document.querySelector(".root");

const Root = ReactDOM.createRoot(root);
Root.render(h1);
