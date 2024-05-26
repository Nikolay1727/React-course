import { DishData } from "@/constants";
import { useCount } from "@/hooks";
import { Button } from "../Button";
import { ButtonBlock, Container, Count } from "./styled";

export const Dish = ({ dish }: { dish: DishData }) => {
  const { count, increase, decrease } = useCount({});

  if (!dish) return null;

  return (
    <Container>
      {dish.name}
      <ButtonBlock>
        <Button onClick={decrease}>-</Button>
        <Count>{count}</Count>
        <Button onClick={increase}>+</Button>
      </ButtonBlock>
    </Container>
  );
};
