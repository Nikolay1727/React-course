import { selectRestaurantIds } from "@/redux/entities";
import { useSelector } from "react-redux";
import { RestaurantTab } from "../RestaurantTab";
import { Container } from "./styled";

interface Props {
  activeRestaurantId: string;
  onTabClick: (id: string) => void;
}

export const RestaurantTabs = ({ activeRestaurantId, onTabClick }: Props) => {
  const restaurantIds = useSelector(selectRestaurantIds);

  return (
    <Container>
      {restaurantIds.map((id: string) => (
        <RestaurantTab
          id={id}
          isActive={activeRestaurantId === id}
          onClick={() => onTabClick(id)}
        />
      ))}
    </Container>
  );
};
