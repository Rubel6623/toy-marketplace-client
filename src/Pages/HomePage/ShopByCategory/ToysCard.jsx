import { Link } from "react-router-dom";


const ToysCard = ({toy}) => {
    const {toyName,toyImg,price,rating}=toy;
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
            <p>Prices : {price}</p>
            <p>Ratings : {rating}</p>
            <Link>
          <button className="btn btn-outline btn-info btn-block">View Details</button>
          </Link>
          </div>
        </div>
    );
};

export default ToysCard;