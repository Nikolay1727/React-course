import { ReviewData } from "@/constants";

export const Review = ({ review }: { review: ReviewData }) => {
  return <span>{review.text}</span>;
};
