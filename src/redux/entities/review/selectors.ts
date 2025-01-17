export const selectReviewModule = (state: any) => state.review;

export const selectReviewById = (state: any, id: string) =>
  selectReviewModule(state).entities[id];

export const selectReviewIds = (state: any) => selectReviewModule(state).ids;
