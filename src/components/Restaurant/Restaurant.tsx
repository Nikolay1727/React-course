import { RestaurantData } from "@/constants";
import { useCallback, useState } from "react";
import { Button } from "../Button";
import { Menu } from "../Menu";
import { ReviewForm } from "../ReviewForm";
import { Reviews } from "../Reviews";

export const Restaurant = ({ restaurant }: { restaurant?: RestaurantData }) => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);

  const closeForm = useCallback(() => {
    setIsVisibleForm(false);
  }, []);

  if (!restaurant) return null;

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
      <Button onClick={() => setIsVisibleForm(true)}>Оставить отзыв</Button>
      {isVisibleForm && <ReviewForm closeForm={closeForm} />}
    </div>
  );
};
