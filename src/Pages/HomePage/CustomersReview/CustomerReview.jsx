import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const CustomerReview = () => {
  return (
    <div className="mx-28">
      <div className="text-center mt-16 mb-6">
        <h2 className="text-5xl font-semibold mb-3">Customer Saying</h2>
        <p className="text-info">Customer Testimonials</p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" 
        className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-28 rounded-full">
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
          </div>
        </div>

        <div className="chat-bubble bg-[#f2f2f2] mt-6">
          <h3 className="text-black text-xl">Mr. Cooper</h3>
          <div className="flex-grow-1">
            <Rating
              placeholderRating={"4.5"}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-warning"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            ></Rating>
          </div>
          <p className="text-black">
            I am always impressed by the wide range of toys this store has to
            offer. Its my go-to for all things playtime!
          </p>
        </div>
      </div>

      <div 
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-28 rounded-full">
            <img src="https://wp-media.familytoday.com/2019/11/shutterstock_150908021-550x367.jpg" />
          </div>
        </div>

        <div className="chat-bubble bg-[#f2f2f2] mt-6">
        <h3 className="text-black text-right text-xl">Ms. Andrea</h3>
          <div className="flex-grow-1 text-right">
            <Rating
              placeholderRating={"4.5"}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-warning"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            ></Rating>
          </div>
          <p className="text-black">
            I am always impressed by the wide range of toys this store has to
            offer. Its my go-to for all things playtime!
          </p>
        </div>

      </div>

      <div 
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-28 rounded-full">
            <img src="https://www.wisebread.com/files/fruganomics/imagecache/605x340/blog-images/thumbs-up-474875961.jpg" />
          </div>
        </div>

        <div className="chat-bubble bg-[#f2f2f2] mt-6">
          <h3 className="text-black text-xl">Mr. James</h3>
          <div className="flex-grow-1">
            <Rating
              placeholderRating={"4.5"}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-warning"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            ></Rating>
          </div>
          <p className="text-black">
            I am always impressed by the wide range of toys this store has to
            offer. Its my go-to for all things playtime!
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default CustomerReview;
