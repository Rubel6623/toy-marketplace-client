/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import MyToysRow from "./MyToysRow";
import { useState } from "react";
import useTitle from "../../hooks/useTitle";

const MyToy = () => {
    const loadedMyToy=useLoaderData();
    const [toys,setToys]=useState(loadedMyToy);
    useTitle('My Toys');

    return (
        <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
              </th>
              <th>Name & Image</th>
              <th>Sub-Category</th>
              <th>Seller</th>
              <th>Price</th>
              <th>Details</th>
            </tr>
          </thead>
  
          <tbody>
  
            {
              toys.map((toy) => (
              <MyToysRow key={toy._id} toy={toy} toys={toys} setToys={setToys}></MyToysRow>
            ))
            }
          </tbody>
  
        </table>
      </div>
    );
};

export default MyToy;