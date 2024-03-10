/* For production app, use hardcoded data only as API may change anytime 
import RestaurantList from "../utils/data";*/

import RestCard from "../Components/RestCard";
import { SWIGGY_URL } from "../utils/constants";

import { useState, useEffect } from "react";

const Main = () => {
  let [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    async function get_data_from_swiggy() {
      const response = await fetch(SWIGGY_URL);
      const json = await response.json();
      let data = json.data;
      return data;
    }

    get_data_from_swiggy().then((res) => {
      let cards = res.cards;
      let restaurants =
        cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      console.log(restaurants);
      setRestaurantList(restaurants);
    });
  }, []);

  if (restaurantList.length === 0) {
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
};

export default Main;
