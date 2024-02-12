import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <div className="logo-div">
            <img
              className="logo"
              src="https://images.unsplash.com/photo-1557053964-937650b63311?q=80&w=1597&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Cart</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const RestCard = (props) => {
  return (
    <article className="restaurant-card">
      <div className="restaurant-card-image-container">
        <img
          src={props.restImgUrl}
          alt="none"
          className="restaurant-card-image"
        />
      </div>
      <div className="restaurant-card-details">
        <h3 className="restaurant-card-title">{props.restName}</h3>
        <p className="restaurant-card-menu">{props.restCuisine}</p>
        <div className="restaurant-card-other-details">
          <h4>{props.restRating}</h4>
          <span>{props.restDeliveryTime}</span>
          <span>Rs.{props.restCuisinePrice} (For Two)</span>
        </div>
      </div>
    </article>
  );
};

const Main = () => {
  return (
    <main className="restaurant-cards">
      <div className="container">
        <RestCard
          restName="KFC"
          restCuisine="Burgur, Pizza, Chicken"
          restImgUrl="https://images.pexels.com/photos/16474897/pexels-photo-16474897/free-photo-of-a-plate-of-meat-barbecue-with-onions-and-pomegranate-seeds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          restRating="4.2"
          restCuisinePrice="500"
        ></RestCard>
        <RestCard
          restName="Niyaaz Biryani"
          restCuisine="Biryani"
          restImgUrl="https://images.pexels.com/photos/12737817/pexels-photo-12737817.jpeg?auto=compress&cs=tinysrgb&w=600"
          restRating="4.2"
          restCuisinePrice="500"
        ></RestCard>
        <RestCard
          restName="Niyaaz Biryani"
          restCuisine="Biryani"
          restImgUrl="https://images.pexels.com/photos/12737817/pexels-photo-12737817.jpeg?auto=compress&cs=tinysrgb&w=600"
          restRating="4.2"
          restCuisinePrice="500"
        ></RestCard>
        <RestCard
          restName="Niyaaz Biryani"
          restCuisine="Biryani"
          restImgUrl="https://images.pexels.com/photos/12737817/pexels-photo-12737817.jpeg?auto=compress&cs=tinysrgb&w=600"
          restRating="4.2"
          restCuisinePrice="500"
        ></RestCard>
        <RestCard
          restName="Niyaaz Biryani"
          restCuisine="Biryani"
          restImgUrl="https://images.pexels.com/photos/12737817/pexels-photo-12737817.jpeg?auto=compress&cs=tinysrgb&w=600"
          restRating="4.2"
          restCuisinePrice="500"
        ></RestCard>
        <RestCard
          restName="Niyaaz Biryani"
          restCuisine="Biryani"
          restImgUrl="https://images.pexels.com/photos/12737817/pexels-photo-12737817.jpeg?auto=compress&cs=tinysrgb&w=600"
          restRating="4.2"
          restCuisinePrice="500"
        ></RestCard>
        <RestCard
          restName="Niyaaz Biryani"
          restCuisine="Biryani"
          restImgUrl="https://images.pexels.com/photos/12737817/pexels-photo-12737817.jpeg?auto=compress&cs=tinysrgb&w=600"
          restRating="4.2"
          restCuisinePrice="500"
        ></RestCard>
        <RestCard
          restName="Niyaaz Biryani"
          restCuisine="Biryani"
          restImgUrl="https://images.pexels.com/photos/12737817/pexels-photo-12737817.jpeg?auto=compress&cs=tinysrgb&w=600"
          restRating="4.2"
          restCuisinePrice="500"
        ></RestCard>
      </div>
    </main>
  );
};

const App = () => {
  return (
    <div>
      <Header></Header>
      <Main></Main>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(<App />);
