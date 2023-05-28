import img1 from '../../../assets/banner/banner2.jpg'
import img2 from '../../../assets/banner/banner3.jpg'
import img3 from '../../../assets/banner/banner4.jpg'
import img4 from '../../../assets/banner/banner5.jpg'

const PhotoGallery = () => {
  return (
    <div         data-aos="fade-up"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000" >
        <div className='text-center mt-5 mb-6'>
            <h2 className='text-5xl font-semibold'>Recent PhotoShoots</h2>
            <p className='text-info'>Check Photo Gallery</p>
        </div>

      <div className="carousel w-full h-[550px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={img1}
            className="w-full rounded-xl"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={img2}
            className="w-full rounded-xl"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={img3}
            className="w-full rounded-xl"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={img4}
            className="w-full rounded-xl"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default PhotoGallery;
