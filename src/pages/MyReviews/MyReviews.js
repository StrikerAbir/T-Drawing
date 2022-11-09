import React, { useContext, useEffect, useState } from "react";
import useTitle from "../../utilities/Hook/useTitle";
import img2 from "../../assets/images/section3.jpg";
import { AuthContext } from "../../context/AuthProvider";
import MyReviewsRow from "./MyReviewsRow/MyReviewsRow";
import toast from "react-hot-toast";

const MyReviews = ({ service_id }) => {
  useTitle("MyReviews");
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  // console.log(`http://localhost:1000/reviews?email=${user.email}`);
  useEffect(() => {
    fetch(`https://t-drawing-server.vercel.app/reviews?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => setReviews(data));
  }, [user?.email, logOut]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure? You want to remove feedback.?"
    );
    if (proceed) {
      fetch(`https://t-drawing-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Feedback Removed Successfully");
            const remaining = reviews.filter((review) => review._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  const handleUpdate = (object) => {
    const { _id } = object;
    console.log(object);
    console.log(`https://t-drawing-server.vercel.app/reviews/${_id}`);
    fetch(`https://t-drawing-server.vercel.app/reviews/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(object),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Feedback Updated Successfully");
          window.location.reload();
        }
      });
  };
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
      <div className="my-10">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <MyReviewsRow
              key={review._id}
              review={review}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            ></MyReviewsRow>
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

export default MyReviews;
