import { ReviewData } from "@/constants";
import { Review } from "../Review";

export const Reviews = ({ reviews }: { reviews: ReviewData[] }) => {
  return (
    <div>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map((review) => (
          <li>
            <Review key={review.id} review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};
