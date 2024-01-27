const h1 = React.createElement(
  "h1",
  { id: "main-heading", className: "heading" },
  "Hello React"
);
console.log(h1);
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(h1);
