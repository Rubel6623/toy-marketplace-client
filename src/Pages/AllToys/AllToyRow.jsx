/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const AllToyRow = ({toy}) => {
    const {_id,toyName,toyImg,price,sellerName,toySubCategory,rating,quantityAvailable}=toy;
    console.log(toy);
  return (
      <tr>
        <th>
        <button className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        <td>

          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask rounded-md w-24 h-24">
                <img
                  src={toyImg}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{toyName}</div>
              <span className="badge badge-ghost badge-sm">Quantity :{quantityAvailable}</span>
            </div>
          </div>

        </td>
        <td>
          {toySubCategory}
        </td>

        <td>{sellerName}</td>
        <td>${price}</td>

        <th>
          <Link className="btn btn-ghost" to={`/allToys/${_id}`}>View Details</Link>
        </th>
      </tr>
  );
};

export default AllToyRow;
