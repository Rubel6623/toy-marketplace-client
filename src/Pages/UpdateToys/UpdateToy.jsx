import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateToy = () => {
    const myToy=useLoaderData();
    const {_id,toyName,url,price,seller,category,quantity,rating,email}=myToy;

    const handleUpdateToy=(event)=>{
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
    
        const updatedToy={toyName,category,seller,quantity,email,price,url,rating,details};
        console.log(updatedToy);
    
        // send data to the server
    
        fetch(`http://localhost:5000/toy/${_id}`, {
          method: 'PUT',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(updatedToy)
        })
        .then(res=>res.json())
        .then(data=> {
          console.log(data);
          if(data.modifiedCount>0){
            Swal.fire({
              title: 'Success !',
              text: 'Toy Updated Successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
            
          }
        })
    
      }

    return (
        <div className=" p-24 mt-5 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-extrabold mb-4">Update Toy : {toyName}</h2>
        <form onSubmit={handleUpdateToy}>
  
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Toy Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={toyName}
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
                  defaultValue={category}
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
                  defaultValue={seller}
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
                  defaultValue={quantity}
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
                  defaultValue={email}
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
                  defaultValue={price}
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
                  defaultValue={url}
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
                  defaultValue={rating}
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
            value="Update Toy"
            className="btn  btn-info btn-block"
          />
        </form>

      </div>
    );
};

export default UpdateToy;