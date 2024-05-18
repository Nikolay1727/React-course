import styled from "styled-components";
import { Footer, Header, Restaurant } from "./components";
import { restaurants } from "./constants";

export const App = () => (
  <div>
    <Header />
    <Content>
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </Content>
    <Footer />
  </div>
);

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0px;
`;
