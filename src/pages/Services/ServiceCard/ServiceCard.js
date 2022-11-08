import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, price, title, rating, description } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 rounded-none border-b-2">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title">{title}</h2>
          <div className="flex items-center">
            <p className="mr-1 font-semibold">Rating: {rating}</p>
            <FaStar className="text-yellow-500"></FaStar>
          </div>
        </div>
        <div className="mb-2">
          <p>{description.length > 100 && description.slice(0, 100)}...</p>
        </div>
        <div className="card-actions items-center">
          <p className=" font-semibold text-xl">
            Price: <span className="text-green-500">${price}</span>
          </p>
          <Link
            to={`/checkout/${_id}`}
            className="btn bg-green-500 hover:bg-green-600 border-none"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
