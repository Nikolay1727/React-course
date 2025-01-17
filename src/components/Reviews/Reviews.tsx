import { Review } from "../Review";

export const Reviews = ({ reviewIds }: { reviewIds: string[] }) => {
  if (!reviewIds?.length) return null;

  return (
    <div>
      <h3>Отзывы</h3>
      <ul>
        {reviewIds.map((id) => (
          <li key={id}>
            <Review id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
