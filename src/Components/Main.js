/* For production app, use hardcoded data only as API may change anytime 
import RestaurantList from "../utils/data";*/

import RestCard from "../Components/RestCard";
import { SWIGGY_URL } from "../utils/constants";

import { useState, useEffect } from "react";

const Main = () => {
  let [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => fetch_data_from_api(), []);

  if (restaurantList?.length === 0) {
    return <h1>Loading</h1>;
  } else
    return (
      <main className="pd-y-2 container">
        <div className="restaurant-search">
          <input
            type="text"
            name="rest-search"
            id="rest-search"
            placeholder="Enter restaurant name"
          />
          <button>Search</button>
          <button onClick={filterList}>Filter</button>
        </div>
        <div className="restaurant-cards-container">
          {restaurantList.map((rest) => (
            <RestCard key={rest.info.id} {...rest.info}></RestCard>
          ))}
        </div>
      </main>
    );

  function filterList() {
    restaurantList = restaurantList.filter(
      (rest) => Number(rest.info.avgRating) > 4.2
    );
    setRestaurantList(restaurantList);
  }

  function fetch_data_from_api() {
    fetch(SWIGGY_URL)
      .then((res) => res.json())
      .then((res) => {
        let cards = res.data.cards;
        let restaurants =
          cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurantList(restaurants);
      })
      .catch((err) => {
        setRestaurantList([]);
      });
  }
};

export default Main;
