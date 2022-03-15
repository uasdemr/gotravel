import React, {SyntheticEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { ValidReviewTextLength } from "../../const";
import { useAppDispatch } from "../../hooks";
import { postCommentAction } from "../../store/api-actions";
import ReviewRating from "./review-rating";

type ReviewForm = {
  rating: null | number;
  review: string;
};

function FormReview(): JSX.Element {
  const dispatch = useAppDispatch()
  const params = useParams();

  const [formData, setFormData] = useState<ReviewForm>({
    rating: null,
    review: "",
  });


  const sendCommet = (evt: SyntheticEvent) => {
    evt.preventDefault()
    dispatch(postCommentAction({ comment: formData.review, rating: formData.rating, id: params.id }))
    setFormData({rating: null, review: ""})
    clearRadio()
  }

  const clearRadio = () => {
    if(document) {
      const checkedRadio = document.querySelector<HTMLInputElement>('input[type="radio"]:checked')
      if(checkedRadio) (
        checkedRadio.checked = false
      )
    }
  }

  const setField = ({ target }: any) =>
    setFormData((prevState) => ({ ...prevState, [target.name]: target.value }));



  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
        <ReviewRating setField={setField} />
      <textarea
        className="reviews__textarea form__textarea"
        value={formData.review}
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={ValidReviewTextLength.Min}
        maxLength={ValidReviewTextLength.Max}
        onChange={setField}
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{" "}
          <span className="reviews__star">rating</span> and describe your stay
          with at least{" "}
          <b className="reviews__text-amount">
            {ValidReviewTextLength.Min} characters
          </b>
          .
        </p>
        <button
          onClick={sendCommet}
          className="reviews__submit form__submit button"
          type="submit"
          disabled={
            formData.review.length < ValidReviewTextLength.Min ||
            formData.rating === null
          }
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormReview;
