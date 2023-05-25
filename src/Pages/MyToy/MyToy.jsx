/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import MyToysRow from "./MyToysRow";

const MyToy = () => {
    const myToy=useLoaderData();
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
              myToy.map((toy) => (
              <MyToysRow key={toy._id} toy={toy}></MyToysRow>
            ))
            }
          </tbody>
  
        </table>
      </div>
    );
};

export default MyToy;