import { ReviewNormalizedData } from "@/constants";
import { useSelector } from "react-redux";

export const Review = ({ reviewId }: { reviewId: string }) => {
  const review: ReviewNormalizedData = useSelector(
    (state: any) => state.review.entities[reviewId]
  );

  if (!review) return null;

  return <span>{review.text}</span>;
};
