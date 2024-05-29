import { Button } from "../Button";

interface Props<T> {
  children: React.ReactNode;
  currentValue: T;
  value: number;
  onChange: (value: number) => void;
}

export const RatingButton = <T,>({
  children,
  currentValue,
  value,
  onChange,
}: Props<T>) => {
  const backgroundColor = currentValue === value ? "yellow" : "white";

  return (
    <Button
      type="button"
      onClick={() => onChange(value)}
      style={{ backgroundColor }}
    >
      {children}
    </Button>
  );
};
