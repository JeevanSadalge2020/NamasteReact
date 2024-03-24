/* For production app, use hardcoded data only as API may change anytime */
import default_RestaurantList from "../utils/swiggy-restaurants";

import RestCard from "../Components/RestCard";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

import { useState, useEffect } from "react";

const Main = () => {
  let [restaurantList, setRestaurantList] = useState(default_RestaurantList);

  useEffect(() => fetch_data_from_api(), []);

  if (restaurantList?.length === 0) {
    /* Display shimmer when there are no cards available */
    return (
      <main className="pd-y-2 container">
        <div className="restaurant-search">
          <input
            type="text"
            name="rest-search"
            id="rest-search"
            placeholder="Enter restaurant name"
          />
          <button className="btn">Search</button>
          <button className="btn" onClick={filterList}>
            Filter
          </button>
        </div>
        <div className="restaurant-cards-container">
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
        </div>
      </main>
    );
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
          <button className="btn">Search</button>
          <button className="btn" onClick={filterList}>
            Filter
          </button>
        </div>
        <div className="restaurant-cards-container">
          {restaurantList.map((rest) => (
            <RestCard key={rest?.info?.id} {...rest.info}></RestCard>
          ))}
        </div>
      </main>
    );

  function filterList() {
    let restaurant_list = restaurantList.filter(
      (rest) => Number(rest.info.avgRating) > 4.2
    );
    setRestaurantList(restaurant_list);
  }

  function fetch_data_from_api() {
    fetch(SWIGGY_URL)
      .then((res) => res.json())
      .then((res) => {
        let cards = res.data.cards;
        let restaurants =
          cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurantList(restaurants);
      });
  }
};

export default Main;
