import { Link } from "react-router-dom";
import {  FaRegStar, FaStar } from 'react-icons/fa';
import Rating from "react-rating";


const ToysCard = ({toy}) => {
    const {_id,toyName,toyImg,price,rating}=toy;
    return (
        <div className="card w-96 glass shadow-2xl">
          <figure>
            <img
              className="w-"
              src={toyImg}
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{toyName}</h2>
            <p className="text-left">Prices : {price}</p>
             
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
            <Link to={`/details/${_id}`}>
          <button className="btn btn-outline btn-info btn-block">View Details</button>
          </Link>
          </div>
        </div>
    );
};

export default ToysCard;