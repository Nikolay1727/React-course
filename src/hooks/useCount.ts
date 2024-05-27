import { useCallback, useState } from "react";

interface Props {
  initialValue?: number;
  minValue?: number;
  maxValue?: number;
}

export const useCount = ({
  initialValue = 0,
  minValue = 0,
  maxValue = 5,
}: Props) => {
  const [count, setCount] = useState(initialValue);

  const increase = useCallback(
    () => setCount((prev) => (prev === maxValue ? prev : prev + 1)),
    [maxValue]
  );

  const decrease = useCallback(
    () => setCount((prev) => (prev === minValue ? prev : prev - 1)),
    [minValue]
  );

  return { count, increase, decrease };
};
