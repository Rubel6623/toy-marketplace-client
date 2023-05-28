import banner1 from "../../../assets/banner/banner1.jpg";


const Banner = () => {
  return (
    <div className="carousel w-full ">


      <div className="relative w-full">
        <img src={banner1} className="w-full rounded-xl" />

        <div className="absolute flex justify-end left-5 right-5 bottom-0 ">
        </div>

        <div className="absolute rounded-xl flex items-center h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 w-1/2 pl-12">
            <h1 className="text-5xl font-semibold">
              One Box Toys <br/>One Box Happiness
            </h1>
            <p>
            A kids toy shop is a store that specializes in selling toys and games designed specifically for children.
            </p>
            <div>
              <button className="btn bg-[#3b9c0e] mr-5 rounded-3xl">Get Your Toys</button>
            </div>
          </div>
        </div>
        
      </div>

    </div>
  );
};

export default Banner;
