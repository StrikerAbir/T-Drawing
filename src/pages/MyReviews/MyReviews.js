import React, { useContext, useEffect, useState } from "react";
import useTitle from "../../utilities/Hook/useTitle";
import img2 from "../../assets/images/section3.jpg";
import { AuthContext } from "../../context/AuthProvider";
import MyReviewsRow from "./MyReviewsRow/MyReviewsRow";

const MyReviews = ({service_id}) => {
  useTitle("MyReviews");
    const { user,logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    // console.log(`http://localhost:1000/reviews?email=${user.email}`);
    useEffect(() => {
      fetch(
        `http://localhost:1000/reviews?email=${user.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            return logOut();
          }
          return res.json();
        })
        .then((data) => setReviews(data));
    }, [user?.email, logOut]);
  return (
    <div>
      <div className="relative">
        <div className="carousel-img">
          <img src={img2} alt="" className="w-full lg:h-[300px] rounded-b-xl" />
        </div>
        <div className="absolute left-24 top-1/4">
          <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold text-white">
            My Reviews
          </h1>
          <h2 className="lg:text-4xl md:text-2xl text-xl font-bold  text-green-400 ">
            {user?.displayName}
          </h2>
          <h4 className="lg:text-xl font-semibold text-white">{user?.email}</h4>
        </div>
          </div>
          <div className='my-10'>
              {
                  reviews.map(review=><MyReviewsRow key={review._id} review={review}></MyReviewsRow>)
              }
          </div>
    </div>
  );
};

export default MyReviews;
