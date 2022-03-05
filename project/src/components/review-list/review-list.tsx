import { ReviewType } from "../../types/review";
import ReviewItem from '../review-item/review-item'

type ReviewsListProps = {
  reviews: ReviewType[];
};

function ReviewList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot;{" "}
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewItem  key={review.id} review={review} />
        ))}
      </ul>
    </>
  );
}

export default ReviewList;
