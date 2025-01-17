import { selectRestaurantById } from "@/redux/entities";
import { useSelector } from "react-redux";
import { Button } from "../Button";

interface Props {
  id: string;
  isActive: boolean;
  onClick: () => void;
}

export const RestaurantTab = ({ id, isActive, onClick }: Props) => {
  const restaurant = useSelector((state: any) =>
    selectRestaurantById(state, id)
  );

  return (
    <Button onClick={onClick} disabled={isActive}>
      {restaurant.name}
    </Button>
  );
};
