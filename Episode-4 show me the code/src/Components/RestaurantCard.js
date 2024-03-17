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
      <div className="restro-card bg-slate-300 hover:bg-white hover:shadow h-[397px] w-[256px] mx-3 my-6 p-2">
        <img className="w-[256px] h-[192px]"
          src={
           CDN_URL +
            cloudinaryImageId
          }
        />
        <h3 className="font-bold py-2">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} </h4>
        <h4>{resData.info.sla.deliveryTime} mins</h4>
      </div>
    );
  };

  // Higher Order Component
  // input - RestaurantCard - RestaurantCardPromoted

 export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
      return (
        <div>
          <label className="absolute text-white bg-black m-2 p-2 rounded-lg shadow uppercase bold">Promoted</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }
  }
export default RestaurantCard;