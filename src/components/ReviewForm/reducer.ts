export interface CreateReviewDto<T> {
  name: T;
  text: T;
  rating: T;
}

export const INITIAL_VALUE: CreateReviewDto<string | number> = {
  name: "",
  text: "",
  rating: 0,
};

export type ActionType = keyof typeof INITIAL_VALUE;

export type Action<T> = {
  type: ActionType;
  payload: T;
};

export const reducer = <T>(
  state: CreateReviewDto<T>,
  { type, payload }: Action<T>
): CreateReviewDto<T> => {
  switch (type) {
    case "name":
      return { ...state, name: payload };
    case "text":
      return { ...state, text: payload };
    case "rating":
      return { ...state, rating: payload };
    default:
      return state;
  }
};
