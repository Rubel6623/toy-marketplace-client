import "./gallery.css";

const Gallery = () => {
  return (
    <div className="mb-12">
      <h2 className="text-4xl font-bold text-center my-12"> Toys Collection </h2>
      <div className=" grid md:grid-cols-3 lg:grid-cols-4 md:gap-6 gap-6">
        {/* card-1 */}
        <div className="card w-96 glass shadow-2xl">
          <figure>
            <img
              className="h-60 w-72"
              src="https://m.media-amazon.com/images/I/71nBF1wlj8L.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Toy Cars</h2>
            <p>How to park your car at your garage?</p>
          </div>
        </div>
        {/* card-2 */}
        <div className="card w-96 glass shadow-2xl">
          <figure>
            <img
              className=""
              src="https://www.picturethemagic.com/wp-content/uploads/2019/12/marvel-toys-featured-image.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Action figure toys</h2>
            <p>How to park your car at your garage?</p>
          </div>
        </div>
        {/* card-3 */}
        <div className="card w-96 glass shadow-2xl">
          <figure>
            <img
              className="w-72"
              src="https://i5.walmartimages.com/asr/20be1117-92b0-4259-98d9-c22119b03c8b.22832647168b704dd73f3b89468d6162.jpeg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Animal toys</h2>
            <p>How to park your car at your garage?</p>
          </div>
        </div>
        {/* card-4 */}
        <div className="card w-96 glass shadow-2xl">
          <figure>
            <img
              className="w-"
              src="https://images.immediate.co.uk/production/volatile/sites/28/2019/10/best-robots-e5ac252.jpg?quality=90&webp=true&resize=1000,667"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Toy robots</h2>
            <p>How to park your car at your garage?</p>
          </div>
        </div>
        {/* card-5 */}
        <div className="card w-96 glass shadow-2xl">
          <figure>
            <img
              className="w-"
              src="https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2010/09/Mcdonalds.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Video game toys</h2>
            <p>How to park your car at your garage?</p>
          </div>
        </div>
        {/* card-6 */}
        <div className="card w-96 glass shadow-2xl">
          <figure>
            <img
              className="w-"
              src="https://i.ebayimg.com/images/g/yJ8AAOSwcGhdratr/s-l300.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Building and Construction Toys</h2>
            <p>How to park your car at your garage?</p>
          </div>
        </div>
        {/* card-7 */}
        <div className="card w-96 glass shadow-2xl">
          <figure>
            <img
              className="w-"
              src="https://ae01.alicdn.com/kf/Sb9700ca4fe9545a9bc94811e0a08d115y/Dollhouse-Miniature-Electric-Guitar-Violin-Saxophone-Drum-Piano-Model-Musical-Instrument-Toy-Craft-Ornament-Doll-Accessories.jpg_Q90.jpg_.webp"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Musical Toys</h2>
            <p>How to park your car at your garage?</p>
          </div>
        </div>
        {/* card-8 */}
        <div className="card w-96 glass shadow-2xl">
          <figure>
            <img
              className="w-"
              src="https://img.fruugo.com/product/2/47/158969472_max.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Electronic Toys</h2>
            <p>How to park your car at your garage?</p>
          </div>
        </div>

      </div>
    </div>
  );
};
export default Gallery;