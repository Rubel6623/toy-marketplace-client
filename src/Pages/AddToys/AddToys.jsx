// bg-[#F4F3F0]
import Swal from 'sweetalert2';

import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AddToys = () => {
  const {user}=useContext(AuthContext);

  const handleAddToy=(event)=>{
    event.preventDefault();

    const form=event.target;
    const toyName=form.name.value;
    const category=form.category.value;
    const seller=form.seller.value;
    const quantity=form.quantity.value;
    const email=form.email.value;
    const price=form.price.value;
    const url=form.url.value;
    const rating=form.rating.value;
    const details=form.details.value;

    const newToy={toyName,category,seller,quantity,email,price,url,rating,details};
    console.log(newToy);

    // send data to the server

    fetch('http://localhost:5000/toy', {
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(newToy)
    })
    .then(res=>res.json())
    .then(data=> {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success !',
          text: 'Toy Added Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })

  }

    return (
        <div className="p-24">
        <h2 className="text-3xl font-extrabold">Add a Toy</h2>
        <form onSubmit={handleAddToy}>
  
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Toy Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="toy Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Sub Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
  
        
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="seller"
                  defaultValue={user?.displayName}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Available  Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="quantity"
                  placeholder="quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
  
       
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  placeholder="price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="url"
                  placeholder="url"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Ratings</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  placeholder="rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
  
       
          <div className=" mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Details Descriptions</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  placeholder="details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add Toy"
            className="btn  btn-info btn-block"
          />
        </form>

      </div>
    );
};

export default AddToys;