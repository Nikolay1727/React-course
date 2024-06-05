import { RestaurantData } from "@/constants";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { NavMenu, NavMenuTabs, Restaurant } from "..";
import { Container } from "./styled";

export const Restaurants = ({
  restaurants,
}: {
  restaurants: RestaurantData[];
}) => {
  const tab: string = useSelector((state: any) => state.tab.tab);

  const tabs: NavMenuTabs[] = useMemo(
    () => restaurants.map(({ id, name }) => ({ id, title: name })) || [],
    [restaurants]
  );

  if (!tab) return null;

  return (
    <Container>
      <NavMenu tabs={tabs} />
      <Restaurant restaurantId={tab} />
    </Container>
  );
};
