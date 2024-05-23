import { ReviewData } from "@/constants";
import { Review } from "../Review";

export const Reviews = ({ reviews }: { reviews: ReviewData[] }) => {
  if (!reviews?.length) return null;

  return (
    <div>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <Review review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};
