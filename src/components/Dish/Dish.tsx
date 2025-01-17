import { useCount } from "@/hooks";
import { selectDishById } from "@/redux/entities";
import { useSelector } from "react-redux";
import { Button } from "../Button";
import { ButtonBlock, Container, Count } from "./styled";

export const Dish = ({ id }: { id: string }) => {
  const dish = useSelector((state) => selectDishById(state, id));

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
