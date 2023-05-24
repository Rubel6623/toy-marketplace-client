import { Link } from "react-router-dom";


const MathToyCard = ({mathToy}) => {
    const {_id,toyName,toyImg,price,rating}=mathToy;
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
            <Link to={`/mathToys/${_id}`}>
          <button className="btn btn-outline btn-info btn-block">View Details</button>
          </Link>
          </div>
        </div>
    );
};

export default MathToyCard;