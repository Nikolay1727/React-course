import { selectRestaurantById } from "@/redux/entities";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "../Button";
import { Menu } from "../Menu";
import { ReviewForm } from "../ReviewForm";
import { Reviews } from "../Reviews";

export const Restaurant = ({ id }: { id: string }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const [isVisibleForm, setIsVisibleForm] = useState(false);

  const closeForm = useCallback(() => {
    setIsVisibleForm(false);
  }, []);

  if (!restaurant) return;

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
