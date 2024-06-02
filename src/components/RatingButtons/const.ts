interface RatingButtonsType {
  id: number;
  label: string;
  value: number;
}

const VALUE_LIST: string[] = ["1", "2", "3", "4", "5"];

export const RATING_BUTTONS: RatingButtonsType[] = VALUE_LIST.map(
  (label, index) => {
    const value = index + 1;

    return { id: value, label, value };
  }
);
