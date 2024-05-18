import { RestaurantData } from "@/constants";
import { Dishes } from "../Dishes";
import { Reviews } from "../Reviews";

export const Restaurant = ({ restaurant }: { restaurant: RestaurantData }) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <div>
        <h3>Меню</h3>
        <Dishes dishes={restaurant.menu} />
      </div>
      <div>
        <h3>Отзывы</h3>
        <Reviews reviews={restaurant.reviews} />
      </div>
    </div>
  );
};
