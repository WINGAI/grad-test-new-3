import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight } from "react-icons/fa";
import banner1 from '../../assets/home/index/banner1.jpg';
import banner2 from '../../assets/home/index/banner2.jpg';
import banner3 from '../../assets/home/index/banner3.jpg';
import banner4 from '../../assets/home/index/banner4.jpg';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment current slide with wrap around logic
      setCurrentSlide(current => (current % 4) + 1);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []); // Run only once when component mounts

  return (
    <>
      <div className="carousel w-screen lg:w-full relative">
        <div id="item1" className={`carousel-item w-full h-full ${currentSlide === 1 ? 'block' : 'hidden'}`}>
          <img src={banner1} className="w-full h-full" alt="Banner 1" />
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white">
            <p className="text-base md:text-2xl lg:text-6xl font-extrabold w-2/3">Greetings! Your Visa Adventure Begins Here</p>
            <Link to="/inquiry"><button className='btn btn-sm my-3 bg-logoRed text-white'>Inquiry now <span className='text-2xl my-1'><FaArrowAltCircleRight /></span></button></Link>
          </div>
        </div>
        <div id="item2" className={`carousel-item w-full h-full ${currentSlide === 2 ? 'block' : 'hidden'}`}>
          <img src={banner2} className="w-full h-full" alt="Banner 2" />
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white">
            <p className="text-base md:text-2xl lg:text-6xl font-extrabold w-2/3">Build an Unlimited Study Abroad Career with Graduate Consultancy</p>
            <Link to="/inquiry"><button className='btn btn-sm my-3 bg-logoRed text-white'>Inquiry now <span className='text-2xl my-1'><FaArrowAltCircleRight /></span></button></Link>
          </div>
        </div>
        <div id="item3" className={`carousel-item w-full h-full ${currentSlide === 3 ? 'block' : 'hidden'}`}>
          <img src={banner3} className="w-full h-full" alt="Banner 3" />
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white">
            <p className="text-base md:text-2xl lg:text-6xl font-extrabold w-2/3">Prepare Today, Succeed Tomorrow; Visa Expert at Your Service</p>
            <Link to="/inquiry"><button className='btn btn-sm my-3 bg-logoRed text-white'>Inquiry now <span className='text-2xl my-1'><FaArrowAltCircleRight /></span></button></Link>
          </div>
        </div>
        <div id="item4" className={`carousel-item w-full h-full ${currentSlide === 4 ? 'block' : 'hidden'}`}>
          <img src={banner4} className="w-full h-full" alt="Banner 4" />
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white">
            <p className="text-base md:text-2xl lg:text-6xl font-extrabold">Student Visa for Canada</p>
            <Link to="/inquiry"><button className='btn btn-sm my-3 bg-logoRed text-white'>Inquiry now <span className='text-2xl my-1'><FaArrowAltCircleRight /></span></button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
