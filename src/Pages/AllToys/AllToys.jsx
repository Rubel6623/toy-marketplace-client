import { useLoaderData } from "react-router-dom";
import AllToyRow from "./AllToyRow";

const AllToys = () => {
  const allToys = useLoaderData();

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>

        <tbody>

          {
            allToys.map((toy) => (
            <AllToyRow key={toy._id} toy={toy}></AllToyRow>
          ))
          }
        </tbody>

      </table>
    </div>
  );
};

export default AllToys;
