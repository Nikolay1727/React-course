import { DishData } from "@/constants";
import { useState } from "react";
import { Button } from "../Button";
import { ButtonBlock, Container, Count } from "./styled";

export const Dish = ({ dish }: { dish: DishData }) => {
  const [count, setCount] = useState(0);

  if (!dish) return null;

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <Container>
      {dish.name}
      <ButtonBlock>
        <Button onClick={decrease} disabled={count === 0}>
          -
        </Button>
        <Count>{count}</Count>
        <Button onClick={increase} disabled={count === 5}>
          +
        </Button>
      </ButtonBlock>
    </Container>
  );
};
