import { useState } from "react";
import { Restaurant, RestaurantTabs } from "..";
import { Container } from "./styled";

export const Restaurants = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState("");

  return (
    <Container>
      <RestaurantTabs
        activeRestaurantId={activeRestaurantId}
        onTabClick={setActiveRestaurantId}
      />
      <Restaurant id={activeRestaurantId} />
    </Container>
  );
};
