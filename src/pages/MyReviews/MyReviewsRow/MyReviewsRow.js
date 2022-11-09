import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../../../context/AuthProvider";

const MyReviewsRow = ({ review, handleDelete,handleUpdate }) => {
  const { user } = useContext(AuthContext);
  const {
    rating,
    comment,
    userEmail,
    userName,
    userImg,
    serviceId,
    serviceTitle,
    time,
    _id,
  } = review;
  // time converting milisec to time
  const commentTime = new Date(time);
  const current = new Date();
  current.setTime(commentTime.getTime());

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const rating = form.rating.value;
    const comment = form.comment.value;
    // current time in milisec
    const now = new Date();
      const timeMili = now.getTime();
      const time = timeMili;
      const id = _id;
      const object = {
          rating,comment,time,_id
      }
      handleUpdate(object)
  };
  return (
    <div className="flex justify-start mx-5 mb-5 pb-3 border-b-2">
      <div className="mr-5">
        <div className="avatar">
          <div className="w-8 rounded">
            <img src={userImg} alt="" />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col">
          <div className="md:flex items-center justify-between">
            <h2 className="text-xl font-bold">{userName}</h2>
            <div>
              <small>{`${current}`}</small>
            </div>
          </div>
          <div>
            <small>{userEmail}</small>
            <div>
              <div className="flex items-center">
                <p>{serviceTitle}</p>
                <div className="flex items-center ml-10">
                  <p className="mr-1 font-semibold">Rating: {rating}</p>
                  <FaStar className="text-yellow-500"></FaStar>
                </div>
              </div>
            </div>
            <p className="font-bold">
              Feedback: "
              <span className="text-green-500 font-normal">{comment}</span>"
            </p>

            {/* modal body */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Update your feedback.</h3>
                <form onSubmit={handleSubmit} className="mt-10 w-11/12">
                  {user?.uid ? (
                    <div className="flex items-center m-4">
                      <div className="avatar">
                        <div className="w-8 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                          <img src={user?.photoURL} alt="" />
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold ml-4">
                        {user?.displayName}
                      </h2>
                    </div>
                  ) : (
                    <h2 className="text-2xl font-bold mb-2">
                      You need login to give feedback.
                    </h2>
                  )}
                  <div className="w-1/2">
                    <input
                      name="rating"
                      type="text"
                      placeholder="Rating (0-5)"
                      className="input input-bordered w-full "
                      defaultValue={rating}
                    />
                  </div>
                  <div className="my-5">
                    <textarea
                      name="comment"
                      className="textarea textarea-bordered w-full h-24"
                      placeholder="Comment..."
                      defaultValue={comment}
                    ></textarea>
                    <div className="pt-5">
                      <input
                        className="btn bg-green-500 hover:bg-green-600 border-none"
                        type="submit"
                        value="Send FeedBack"
                      />
                    </div>
                  </div>
                </form>
                <div className="modal-action">
                  <label htmlFor="my-modal" className="btn">
                    Exit
                  </label>
                </div>
              </div>
            </div>

            {/* buttons */}
            <div className="flex justify-end">
              <button
                className="btn btn-circle btn-sm mr-4 bg-red-500"
                onClick={() => handleDelete(_id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <label
                htmlFor="my-modal"
                className="btn btn-square btn-sm bg-green-500"
              >
                ⌘
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviewsRow;
