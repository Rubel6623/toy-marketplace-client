// bg-[#F4F3F0]

const AddToys = () => {
    return (
        <div className="p-24">
        <h2 className="text-3xl font-extrabold">Add a Toy</h2>
        <form >
  
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
                  name="Category"
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
                  placeholder="seller"
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
                  placeholder="seller email"
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
            value="Add Coffee"
            className="btn  btn-info btn-block"
          />
        </form>
      </div>
    );
};

export default AddToys;