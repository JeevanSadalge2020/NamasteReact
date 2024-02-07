// Use React functional component

import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1> Namaste React </h1>;

const Aim = function () {
  return <p>I am currently learning React</p>;
};

const name = <span>My name is Jeevan</span>;

const bio = <p>{name}, and I am a JS developer.</p>;

const myBirthYear = 1992;

function HeadingComponent() {
  return (
    <div className="container">
      <Title />
      <h2> This is a great tutorial on React..! </h2>
      <h3>
        {bio}My age is {2024 - myBirthYear}
      </h3>
      {Aim()}
    </div>
  );
}

let root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(<HeadingComponent />);
