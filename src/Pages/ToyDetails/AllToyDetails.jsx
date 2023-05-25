import { useLoaderData } from "react-router-dom";


const AllToyDetails = () => {
    const toy=useLoaderData();
    const {toyName,price,rating,toyImg,sellerName,toySubCategory,description}=toy;
    return (
<div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={toyImg} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{toyName}</h2>
    <p>Price : ${price}</p>
    <p>Rating : {rating}</p>
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