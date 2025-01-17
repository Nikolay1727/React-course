import { selectReviewById } from "@/redux/entities";
import { useSelector } from "react-redux";

export const Review = ({ id }: { id: string }) => {
  const review = useSelector((state) => selectReviewById(state, id));

  if (!review) return null;

  return <span>{review.text}</span>;
};
