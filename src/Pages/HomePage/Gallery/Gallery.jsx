import { Link } from "react-router-dom";
import "./gallery.css";
import {  FaRegStar, FaStar } from 'react-icons/fa';
import Rating from "react-rating";

const Gallery = () => {
  return (
    <div className="mb-12">
      <h2 className="text-4xl font-bold text-center my-12">
        {" "}
        Popular Toys Collection{" "}
      </h2>
      <div className=" grid md:grid-cols-3 lg:grid-cols-4 md:gap-6 gap-6">
        {/* card-1 */}
        <div className="card w-96 glass shadow-2xl">
          <figure>
            <img
              className="h-60 w-72"
              src="https://m.media-amazon.com/images/I/71kaXFbMd8L._AC_SX466_.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Classic Bead Maze</h2>
            <p>How to park your car at your garage?</p>
            <p>Price : $21.45</p>
            
            <div className="flex-grow-1">
              <Rating 
               placeholderRating={'4.2'}
               readonly
               emptySymbol={<FaRegStar></FaRegStar>}
               placeholderSymbol={<FaStar className="text-warning"></FaStar>}
               fullSymbol={<FaStar></FaStar>}
              ></Rating>
              <span className="ps-2">4.2</span>
          </div>
            <Link>
              <button className="btn btn-outline btn-info btn-block">
                Add To Cart
              </button>
            </Link>
          </div>
        </div>
        {/* card-2 */}
        <div className="card w-96 glass shadow-2xl">
          <figure>
            <img
              className="px-3"
              src="https://rukminim1.flixcart.com/image/612/612/kp78e4w0/block-construction/h/f/p/best-buy-happy-house-building-blocks-creative-learning-toy-original-imag3hkumzh5xmbs.jpeg?q=70"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Building Blocks</h2>
            <p>How to park your car at your garage?</p>

            <p>Price : $21.45</p>
            
            <div className="flex-grow-1">
              <Rating 
               placeholderRating={'4.2'}
               readonly
               emptySymbol={<FaRegStar></FaRegStar>}
               placeholderSymbol={<FaStar className="text-warning"></FaStar>}
               fullSymbol={<FaStar></FaStar>}
              ></Rating>
              <span className="ps-2">4.2</span>
          </div>

            <Link>
              <button className="btn btn-outline btn-info btn-block">
                Add To Cart
              </button>
            </Link>
          </div>
        </div>
        {/* card-3 */}
        <div className="card w-96 glass shadow-2xl">
          <figure>
            <img
              className=""
              src="https://cdn.amightygirl.com/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/r/primary_science_deluxe_1.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Science Kits </h2>
            <p>How to park your car at your garage?</p>
            <p>Price : $21.45</p>
            
            <div className="flex-grow-1">
              <Rating 
               placeholderRating={'4.2'}
               readonly
               emptySymbol={<FaRegStar></FaRegStar>}
               placeholderSymbol={<FaStar className="text-warning"></FaStar>}
               fullSymbol={<FaStar></FaStar>}
              ></Rating>
              <span className="ps-2">4.2</span>
          </div>
            <Link>
              <button className="btn btn-outline btn-info btn-block">
                Add To Cart
              </button>
            </Link>
          </div>
        </div>
        {/* card-4 */}
        <div className="card w-96 glass shadow-2xl">
          <figure>
            <img
              className="w-"
              src="https://i5.walmartimages.com/asr/0dccc0c1-6e56-4a65-b3ad-c4e926396333.a7c1718a5c22f0b7537c2d8d284d1238.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Science Engineering Kits</h2>
            <p>How to park your car at your garage?</p>
            <p>Price : $21.45</p>
            
            <div className="flex-grow-1">
              <Rating 
               placeholderRating={'4.2'}
               readonly
               emptySymbol={<FaRegStar></FaRegStar>}
               placeholderSymbol={<FaStar className="text-warning"></FaStar>}
               fullSymbol={<FaStar></FaStar>}
              ></Rating>
              <span className="ps-2">4.2</span>
          </div>
            <Link>
              <button className="btn btn-outline btn-info btn-block">
                Add To Cart
              </button>
            </Link>
          </div>
        </div>
        {/* card-5 */}
        <div className="card w-96 glass shadow-2xl">
          <figure>
            <img
              className="px-3"
              src="https://ae01.alicdn.com/kf/HTB1leEGLSzqK1RjSZFjq6zlCFXay/STEM-Blocks-Technical-Building-Block-Science-Toy-DIY-Blocks-Kit-Mechanical-Engineering-Educational-for-Kids-Gift.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Technical Building Kits</h2>
            <p>How to park your car at your garage?</p>
            <p>Price : $21.45</p>
            
            <div className="flex-grow-1">
              <Rating 
               placeholderRating={'4.2'}
               readonly
               emptySymbol={<FaRegStar></FaRegStar>}
               placeholderSymbol={<FaStar className="text-warning"></FaStar>}
               fullSymbol={<FaStar></FaStar>}
              ></Rating>
              <span className="ps-2">4.2</span>
          </div>
            <Link>
              <button className="btn btn-outline btn-info btn-block">
                Add To Cart
              </button>
            </Link>
          </div>
        </div>
        {/* card-6 */}
        <div className="card w-96 glass shadow-2xl">
          <figure>
            <img
              className="w-"
              src="https://images.othoba.com/images/thumbs/0354602_kids-wooden-puzzle-toys.jpeg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Kids Wooden Puzzle</h2>
            <p>How to park your car at your garage?</p>
            <p>Price : $21.45</p>
            
            <div className="flex-grow-1">
              <Rating 
               placeholderRating={'4.2'}
               readonly
               emptySymbol={<FaRegStar></FaRegStar>}
               placeholderSymbol={<FaStar className="text-warning"></FaStar>}
               fullSymbol={<FaStar></FaStar>}
              ></Rating>
              <span className="ps-2">4.2</span>
          </div>
            <Link>
              <button className="btn btn-outline btn-info btn-block">
                Add To Cart
              </button>
            </Link>
          </div>
        </div>
        {/* card-7 */}
        <div className="card w-96 glass shadow-2xl">
          <figure>
            <img
              className="px-3"
              src="https://m.media-amazon.com/images/I/71dK-fJlqSL._SX679_.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Kids Engineering Tools</h2>
            <p>How to park your car at your garage?</p>
            <p>Price : $21.45</p>
            
            <div className="flex-grow-1">
              <Rating 
               placeholderRating={'4.2'}
               readonly
               emptySymbol={<FaRegStar></FaRegStar>}
               placeholderSymbol={<FaStar className="text-warning"></FaStar>}
               fullSymbol={<FaStar></FaStar>}
              ></Rating>
              <span className="ps-2">4.2</span>
          </div>
            <Link>
              <button className="btn btn-outline btn-info btn-block">
                Add To Cart
              </button>
            </Link>
          </div>
        </div>
        {/* card-8 */}
        <div className="card w-96 glass shadow-2xl">
          <figure>
            <img
              className="px-3"
              src="https://img.fruugo.com/product/2/47/158969472_max.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Electronic Toys</h2>
            <p>How to park your car at your garage?</p>
            <p>Price : $21.45</p>
            
            <div className="flex-grow-1">
              <Rating 
               placeholderRating={'4.2'}
               readonly
               emptySymbol={<FaRegStar></FaRegStar>}
               placeholderSymbol={<FaStar className="text-warning"></FaStar>}
               fullSymbol={<FaStar></FaStar>}
              ></Rating>
              <span className="ps-2">4.2</span>
          </div>
            <Link>
              <button className="btn btn-outline btn-info btn-block">
                Add To Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
