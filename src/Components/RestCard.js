import { CDN_URL } from "../utils/constants";

const RestCard = (props) => {
  let { name, avgRating, cuisines, cloudinaryImageId, costForTwo } = props;
  return (
    <article className="restaurant-card">
      <div className="restaurant-card-image-container">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="NONE"
          className="restaurant-card-image"
        />
      </div>
      <div className="restaurant-card-details">
        <h3 className="restaurant-card-title">{name}</h3>
        <p className="restaurant-card-menu">{cuisines?.join(", ")}</p>
        <div className="restaurant-card-other-details">
          <p>Rating: {avgRating}</p>
          <span>{costForTwo}</span>
        </div>
      </div>
    </article>
  );
};

export default RestCard;
