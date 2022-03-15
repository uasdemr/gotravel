import { Fragment } from "react";
import { MAX_REVIEW_STARS_COUNT } from "../../const";

type ReviewRatingType = {
  setField: ({ target }: any) => void
}

function ReviewRating({setField}: ReviewRatingType) {

  const ratingStars = new Array(MAX_REVIEW_STARS_COUNT)
  .fill(null)
  .map((el, index) => (el = index + 1))
  .reverse();

  const ratingStarsElement = ratingStars.map((rating) => (
    <Fragment key={rating}>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={rating}
        id={`${rating}-stars`}
        type="radio"
        onChange={setField}
      />
      <label
        htmlFor={`${rating}-stars`}
        className="reviews__rating-label form__rating-label"
        title="perfect"
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </Fragment>
  ));

  return (
    <div className="reviews__rating-form form__rating">
      {ratingStarsElement}
    </div>
  )
}

export default ReviewRating
