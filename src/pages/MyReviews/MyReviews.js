import React, { useContext } from "react";
import useTitle from "../../utilities/Hook/useTitle";
import img2 from "../../assets/images/section3.jpg";
import { AuthContext } from "../../context/AuthProvider";

const MyReviews = () => {
  useTitle("MyReviews");
  const { user } = useContext(AuthContext);
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
              
          </div>
    </div>
  );
};

export default MyReviews;
