export const selectDishModule = (state: any) => state.dish;

export const selectDishById = (state: any, id: string) =>
  selectDishModule(state).entities[id];

export const selectDishIds = (state: any) => selectDishModule(state).ids;
