import { RestaurantData } from "@/constants";
import { Menu } from "../Menu";
import { Reviews } from "../Reviews";

export const Restaurant = ({ restaurant }: { restaurant: RestaurantData }) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
