import { ReviewData } from "@/constants";

export const Review = ({ review }: { review: ReviewData }) => {
  if (!review) return null;

  return <span>{review.text}</span>;
};
