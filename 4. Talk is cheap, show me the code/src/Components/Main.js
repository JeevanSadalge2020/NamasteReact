import restaurantList from "../utils/data";
import restaurants from "../utils/restData.json";
import RestCard from "../Components/RestCard";

import { useState } from "react";

const Main = () => {
  let [filteredRestaurantList, setFilteredRestaurantList] =
    useState(restaurantList);
  return (
    <main className="pd-y-2 container">
      <div className="restaurant-search">
        <input
          type="text"
          name="rest-search"
          id="rest-search"
          placeholder="Enter restaurant name"
        />
        <button onClick={filterList}>Search</button>
      </div>
      <div className="restaurant-cards-container">
        {filteredRestaurantList.map((rest) => (
          <RestCard key={rest.data.id} {...rest.data}></RestCard>
        ))}
      </div>
    </main>
  );
  function filterList() {
    filteredRestaurantList = filteredRestaurantList.filter(
      (rest) => Number(rest.data.avgRating) > 4
    );
    setFilteredRestaurantList(filteredRestaurantList);
  }
};

export default Main;
