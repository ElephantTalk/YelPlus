export const fetchReviews = (business_id) =>
  $.ajax({
    method: "get",
    url: `/api/businesses/${business_id}/reviews`,
    data: business_id,
  });

export const postReview = (review) =>
  $.ajax({
    method: "post",
    url: `/api/businesses/${review.business_id}/reviews`,
    data: { review },
  });

export const deleteReview = (review) => {
  return $.ajax({
    method: "delete",
    url: `/api/businesses/${review.business_id}/reviews/${review.id}`,
  });
};
