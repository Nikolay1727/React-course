import { RestaurantData } from "@/constants";
import { styled } from "styled-components";
import { Restaurant } from "..";

export const Restaurants = ({
  restaurants,
}: {
  restaurants: RestaurantData[];
}) => {
  return (
    <Content>
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
`;
