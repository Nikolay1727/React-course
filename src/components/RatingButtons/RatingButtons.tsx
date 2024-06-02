import { RatingButton } from "../RatingButton";
import { RATING_BUTTONS } from "./const";

interface Props<T> {
  currentValue: T;
  onChange: (value: number) => void;
}

export const RatingButtons = <T,>({ currentValue, onChange }: Props<T>) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <span>Рейтинг</span>
      <div style={{ display: "flex", gap: "10px" }}>
        {RATING_BUTTONS.map(({ id, label, value }) => {
          const isCheck = currentValue === value;

          return (
            <RatingButton
              key={id}
              isCheck={isCheck}
              onClick={() => !isCheck && onChange(value)}
            >
              {label}
            </RatingButton>
          );
        })}
      </div>
    </div>
  );
};
