import { RestaurantNormalizedData } from "@/constants";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "../Button";
import { Menu } from "../Menu";
import { ReviewForm } from "../ReviewForm";
import { Reviews } from "../Reviews";

export const Restaurant = ({ restaurantId }: { restaurantId: string }) => {
  const restaurant: RestaurantNormalizedData = useSelector(
    (state: any) => state.restaurant.entities[restaurantId]
  );

  const [isVisibleForm, setIsVisibleForm] = useState(false);

  const closeForm = useCallback(() => {
    setIsVisibleForm(false);
  }, []);

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <Menu dishIds={restaurant.menu} />
      <Reviews reviewIds={restaurant.reviews} />
      <Button onClick={() => setIsVisibleForm(true)}>Оставить отзыв</Button>
      {isVisibleForm && <ReviewForm closeForm={closeForm} />}
    </div>
  );
};
