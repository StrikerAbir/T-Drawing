import React, { useContext } from "react";
import img2 from "../../../assets/images/section3.jpg";
import { AuthContext } from "../../../context/AuthProvider";
const ReviewSection = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="my-20">
      <div className="text-center mb-10">
        <p className="text-2xl font-bold text-green-500">Review</p>
        <h2 className="text-5xl font-semibold">Give Us Feedback </h2>
      </div>
      <div className="relative">
        <div>
          <img src={img2} alt="" className="w-full lg:h-auto h-[400px]" />
        </div>
        <div className="">
          <div className="absolute right-0 h-full w-full top-0 bg-white bg-opacity-70">
            <div className="flex justify-center items-center h-full">
              <form className="mt-10 w-11/12">
                <div className="flex items-center m-4">
                  <div className="avatar">
                    <div className="w-8 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                      <img src={user?.photoURL} alt="" />
                    </div>
                  </div>
                                  <h2 className='text-2xl font-bold ml-4'>{ user?.displayName}</h2>
                  
                </div>
                <div className="w-1/2">
                  <input
                    name="rating"
                    type="text"
                    placeholder="Rating (0-5)"
                    className="input input-bordered w-full "
                    required
                  />
                </div>
                <div className="my-5">
                  <textarea
                    name="description"
                    className="textarea textarea-bordered w-full h-24"
                    placeholder="Comment..."
                  ></textarea>
                  <div className="pt-5">
                    <input
                      className="btn bg-green-500 hover:bg-green-600 border-none"
                      type="submit"
                      value="Review"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
