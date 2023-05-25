import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToysRow = ({ toy }) => {
  const {
    _id,
    toyName,
    url,
    price,
    seller,
    category,
    quantity,
  } = toy;

  const handleDelete=(_id)=>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {

          fetch(`http://localhost:5000/toy/${_id}`,{
            method:'DELETE',
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data);
            if(data.deletedCount >0){
                Swal.fire(
                    'Deleted!',
                    'Your Toy has been deleted.',
                    'success'
                  )
            }
          })
        }
      })
  }

  return (
    <tr>
      <th>
        <button onClick={()=>handleDelete(_id)} className="btn btn-circle bg-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask rounded-md w-24 h-24">
              <img src={url} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{toyName}</div>
            <span className="badge badge-ghost badge-sm">
              Quantity :{quantity}
            </span>
          </div>
        </div>
      </td>
      <td>{category}</td>

      <td>{seller}</td>
      <td>${price}</td>

      <th>
        <Link className="btn btn-ghost">Update</Link>
      </th>
    </tr>
  );
};

export default MyToysRow;
