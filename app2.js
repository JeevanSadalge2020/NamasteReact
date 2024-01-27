const root = document.querySelector(".root");

const uli1 = React.createElement("li", {}, "A");
const uli2 = React.createElement("li", {}, "B");
const uli3 = React.createElement("li", {}, "C");

const oli1 = React.createElement("li", {}, "X");
const oli2 = React.createElement("li", {}, "Y");
const oli3 = React.createElement("li", {}, "Z");

const ul = React.createElement("ul", {}, [uli1, uli2, uli3]);
const ol = React.createElement("ol", {}, [oli1, oli2, oli3]);

const parent = React.createElement("div", { id: "parenrt" }, [ul, ol]);

const Root = ReactDOM.createRoot(root);
Root.render(parent);
