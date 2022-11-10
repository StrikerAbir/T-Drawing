import React, { useEffect, useState } from "react";
import AllReviewRow from "./AllReviewRow/AllReviewRow";

const AllReview = ({ reviews }) => {
  // const [reviews, setReviews] = useState([]);
  // console.log(reviews);
  // useEffect(() => {
  //   fetch(`https://t-drawing-server.vercel.app/reviews/all?sid=${serviceId}`)
  //     .then((res) => res.json())
  //     .then((data) => setReviews(data));
  // }, [serviceId]);
  return (
    <div>
      <div className="mb-10 mx-5">
        <p className="text-2xl font-bold text-green-500">Feedback</p>
        <h2 className="text-5xl font-semibold">Client's Feedback </h2>
      </div>
      <div className="overflow-x-auto w-full my-10">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <AllReviewRow key={review._id} review={review}></AllReviewRow>
          ))
        ) : (
          <div className="text-center my-10 text-4xl font-bold border-2 p-5">
            <h2>NO Reviews or Feedback</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllReview;
