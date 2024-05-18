import { ReviewData } from "@/constants";
import { Review } from "../Review";

export const Reviews = ({ reviews }: { reviews: ReviewData[] }) => {
  return (
    <ul>
      {reviews.map((review) => (
        <li>
          <Review key={review.id} review={review} />
        </li>
      ))}
    </ul>
  );
};
