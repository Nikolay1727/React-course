import { RestaurantData } from "@/constants";
import { useMemo, useState } from "react";
import { NavMenu, NavMenuTabs, Restaurant } from "..";
import { Container } from "./styled";

export const Restaurants = ({
  restaurants,
}: {
  restaurants: RestaurantData[];
}) => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState(
    restaurants?.[0]?.id || ""
  );

  const tabs: NavMenuTabs[] = useMemo(
    () => restaurants?.map(({ id, name }) => ({ id, title: name })) || [],
    [restaurants]
  );

  if (!restaurants?.length) return null;

  return (
    <Container>
      <NavMenu tabs={tabs} setItemId={setCurrentRestaurantId} />
      {currentRestaurantId && (
        <Restaurant
          restaurant={restaurants.find(
            (item) => item.id === currentRestaurantId
          )}
        />
      )}
    </Container>
  );
};
