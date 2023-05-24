import banner1 from "../../../assets/banner/banner1.jpg";


const Banner = () => {
  return (
    <div className="carousel w-full ">


      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full rounded-xl" />

        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
        </div>

        <div className="absolute rounded-xl flex items-center h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 w-1/2 pl-12">
            <h1 className="text-5xl font-semibold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in form
            </p>
            <div>
              <button className="btn bg-[#3b9c0e] mr-5 rounded-3xl">Get Your Toys</button>
            </div>
          </div>
        </div>
      </div>





{/* <div className="hero min-h-screen my-4" style={{ backgroundImage: `url("https://images.pexels.com/photos/4484789/pexels-photo-4484789.jpeg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5 ">Provident cupiditate voluptatem et in.Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div> */}

    </div>
  );
};

export default Banner;
