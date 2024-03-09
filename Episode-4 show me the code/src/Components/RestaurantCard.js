import { CDN_URL } from "../utilis/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
    } = resData?.info;
    return (
      <div className="restro-card">
        <img
          src={
           CDN_URL +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} </h4>
        <h4>{resData.info.sla.deliveryTime} mins</h4>
      </div>
    );
  };
export default RestaurantCard;