import {ReviewType} from '../../types/review'
import { RATING_COEFFICIENT } from "../../const";
import { getFormattedDate } from "../../utils";

type ReviewPropsType = {
    review: ReviewType;
};

function ReviewItem({review}: ReviewPropsType):JSX.Element {
    return(
        <li className="reviews__item" key={review.id}>
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img
                  className="reviews__avatar user__avatar"
                  src={review.user.avatarUrl}
                  width="54"
                  height="54"
                  alt="Reviews avatar"
                />
              </div>
              <span className="reviews__user-name">{review.user.name}</span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span
                    style={{
                      width: `${
                        Math.round(review.rating) * RATING_COEFFICIENT
                      }%`,
                    }}
                  />
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">{review.comment}</p>
              <time className="reviews__time" dateTime="2019-04-24">
                {getFormattedDate(review.date)}
              </time>
            </div>
          </li>
    )
}

export default ReviewItem
