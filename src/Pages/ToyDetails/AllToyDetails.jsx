import { useLoaderData } from "react-router-dom";
import {  FaRegStar, FaStar } from 'react-icons/fa';
import Rating from "react-rating";


const AllToyDetails = () => {
    const toy=useLoaderData();
    const {toyName,price,rating,toyImg,sellerName,toySubCategory,description}=toy;
    return (
<div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={toyImg} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{toyName}</h2>
    <p className="mt-6">Price : ${price}</p>
    <div className="flex-grow-1 text-left">
              <Rating 
               placeholderRating={rating}
               readonly
               emptySymbol={<FaRegStar></FaRegStar>}
               placeholderSymbol={<FaStar className="text-warning"></FaStar>}
               fullSymbol={<FaStar></FaStar>}
              ></Rating>
              <span className="ps-2">{rating}</span>
    </div>
    <p>Seller name : {sellerName}</p>
    <p>Toy Sub-category : {toySubCategory}</p>
    <p>Description : {description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default AllToyDetails;