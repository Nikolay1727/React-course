import { RestaurantData } from "@/constants";
import { useState } from "react";
import { NavMenu, NavMenuTabs, Restaurant } from "..";
import { Container } from "./styled";

export const Restaurants = ({
  restaurants,
}: {
  restaurants: RestaurantData[];
}) => {
  const [currentRestaurant, setCurrentRestaurant] = useState(
    restaurants?.[0]?.id || ""
  );

  if (!restaurants?.length) return null;

  const tabs: NavMenuTabs[] = restaurants.map(({ id, name }) => {
    return { id, title: name };
  });

  return (
    <Container>
      <NavMenu tabs={tabs} setRestaurant={setCurrentRestaurant} />
      {restaurants.map((restaurant) => {
        if (currentRestaurant === restaurant.id) {
          return <Restaurant key={restaurant.id} restaurant={restaurant} />;
        }
      })}
    </Container>
  );
};
