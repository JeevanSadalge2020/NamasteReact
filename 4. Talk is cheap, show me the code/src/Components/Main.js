import restaurantList from "../utils/data";
import RestCard from "../Components/RestCard";

const Main = () => {
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
      </div>
      <div className="restaurant-cards-container">
        {restaurantList.map((rest) => (
          <RestCard key={rest.data.id} {...rest.data}></RestCard>
        ))}
      </div>
    </main>
  );
};

export default Main;
