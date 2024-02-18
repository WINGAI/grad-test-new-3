import { useNavigate } from "react-router-dom";
import banner from "../../assets/service/service banner.jpg"
import careerCounseling from "../../assets/service/Career Counseling-01.jpg"
import universitySelection from "../../assets/service/University Selection-01.jpg"
import visaDocument from "../../assets/service/Visa Document-01.jpg"
import studentVisa from "../../assets/service/Student Visa-01.jpg"
import sop from "../../assets/service/SOP Resume Preparation-01.jpg"
import spouseVisa from "../../assets/service/Spouse Visa-01.jpg"
import pr from "../../assets/service/PR  Immigration-01.jpg"
import visitorVisa from "../../assets/service/Visitor Visa-01.jpg"
import accommodation from "../../assets/service/Accommodation-01.jpg"
import bank from "../../assets/service/Bank Solvancy-01.jpg"
import airTicket from "../../assets/service/Air Ticket-01.jpg"
import pre from "../../assets/service/Pre – Departure Guidance-01.jpg"


const Services = () => {
    const navigate = useNavigate();
    return (
        <div>

        <div>
            <img className="w-full" src={banner} alt="" />
        </div>

        <div className="my-20">

            <h1 className="text-center text-3xl font-bold py-10">Our Services</h1>

            <div className="flex flex-row gap-5 flex-wrap lg:max-w-7xl mx-16 md:mx-auto justify-center">

            <div onClick={()=>{navigate('/services/career-counseling')}} className="flip-card" tabIndex="0">
  <div className="flip-card-inner">
    <div className="flip-card-front flex flex-col">
      <img className="darkened-image h-[300px] sm:h-auto" src={careerCounseling} alt="" />
      <h1 className="fixed text-white font-bold text-xl md:text-2xl">Career Counseling</h1>
    <button className="btn btn-outline text-white lg:hidden fixed bottom-6">Read More</button>

    </div>
    <div className="flip-card-back">
    <div className="w-[300px] h-[300px] bg-base-100 shadow-xl zoom text-black">
  <div className="flex flex-col gap-3 px-3 pt-5">
  <h2 className="text-3xl sm:text-5xl text-red-700"><i className="fa-solid fa-graduation-cap"></i></h2>
    <p className="font-bold text-blue-950">Career Counseling</p>
    <p className="font-small font-light">Developing a long lasting relationship and identifying the interests and the goals of students</p>
    <button className="btn btn-outline btn-error ">Read More</button>
  </div>
</div>    </div>
  </div>
</div>


<div onClick={() => { navigate('/services/university-selection') }} className="flip-card" tabIndex="0">
  <div className="flip-card-inner">
    <div className="flip-card-front flex flex-col">
      <img className="darkened-image h-[300px] sm:h-auto" src={universitySelection} alt="" />
      <h1 className="fixed text-white font-bold text-xl md:text-2xl">University Selection</h1>
    <button className="btn btn-outline text-white lg:hidden fixed bottom-6">Read More</button>
    </div>
    <div className="flip-card-back">
      <div className="w-[300px] h-[300px] bg-base-100 shadow-xl transform transition-transform hover:scale-105 text-black">
  <div className="flex flex-col gap-3 px-3 pt-5">
          <h2 className="text-3xl sm:text-5xl text-red-700"><i className="fa-solid fa-building-columns"></i></h2>
          <p className="font-bold text-blue-950">University Selection</p>
          <p className="font-small font-light">Selecting the right University is a daunting task given the vast choices that are available.</p>
          <button className="btn btn-outline btn-error ">Read More</button>
        </div>
      </div>
    </div>
  </div>
</div>




<div onClick={() => { navigate('/services/visa-document') }} className="flip-card" tabIndex="0">
  <div className="flip-card-inner">
    <div className="flip-card-front flex flex-col">
      <img className="darkened-image h-[300px] sm:h-auto" src={visaDocument} alt="" />
      <h1 className="fixed text-white font-bold text-xl md:text-2xl">Visa Document</h1>
    <button className="btn btn-outline text-white lg:hidden fixed bottom-6">Read More</button>
    </div>
    <div className="flip-card-back">
      <div className="w-[300px] h-[300px] bg-base-100 shadow-xl transform transition-transform hover:scale-105 text-black">
  <div className="flex flex-col gap-3 px-3 pt-5">
          <h2 className="text-3xl sm:text-5xl text-red-700"><i className="fa-solid fa-file"></i></h2>
          <p className="font-bold text-blue-950">Visa Document</p>
          <p className="font-small font-light sm:flex">Visa documentation, the most tedious and demanding aspect of their overseas education process.</p>
          <button className="btn btn-outline btn-error ">Read More</button>
        </div>
      </div>
    </div>
  </div>
</div>




<div onClick={() => { navigate('/services/student-visa') }} className="flip-card" tabIndex="0">
  <div className="flip-card-inner">
    <div className="flip-card-front flex flex-col">
      <img className="darkened-image h-[300px] sm:h-auto" src={studentVisa} alt="" />
      <h1 className="fixed text-white font-bold text-xl md:text-2xl">Student Visa</h1>
    <button className="btn btn-outline text-white lg:hidden fixed bottom-6">Read More</button>
    </div>
    <div className="flip-card-back">
      <div className="w-[300px] h-[300px] bg-base-100 shadow-xl transform transition-transform hover:scale-105 text-black">
  <div className="flex flex-col gap-3 px-3 pt-5">
          <h2 className="text-3xl sm:text-5xl text-red-700"><i className="fa-brands fa-cc-visa"></i></h2>
          <p className="font-bold text-blue-950">Student Visa</p>
          <p className="font-small font-light sm:flex">Student visa, as the name suggests, are visas issued to applicants whose primary purpose of visit...</p>
          <button className="btn btn-outline btn-error ">Read More</button>
        </div>
      </div>
    </div>
  </div>
</div>




<div onClick={() => { navigate('/services/sop-resume-prep') }} className="flip-card" tabIndex="0">
  <div className="flip-card-inner">
    <div className="flip-card-front flex flex-col">
      <img className="darkened-image h-[300px] sm:h-auto" src={sop} alt="" />
      <h1 className="fixed text-white font-bold text-xl md:text-2xl">SOP | Resume Preparation</h1>
    <button className="btn btn-outline text-white lg:hidden fixed bottom-6">Read More</button>
    </div>
    <div className="flip-card-back">
      <div className="w-[300px] h-[300px] bg-base-100 shadow-xl transform transition-transform hover:scale-105 text-black">
  <div className="flex flex-col gap-3 px-3 pt-5">
          <h2 className="text-3xl sm:text-5xl text-red-700"><i className="fa-regular fa-file"></i></h2>
          <p className="font-bold text-blue-950">SOP | Resume Preparation</p>
          <p className="font-small font-light sm:flex">Effective profile writing, goal projectio and strong connections to Bangladesh...</p>
          <button className="btn btn-outline btn-error ">Read More</button>
        </div>
      </div>
    </div>
  </div>
</div>




<div onClick={() => { navigate('/services/spouse-visa') }} className="flip-card" tabIndex="0">
  <div className="flip-card-inner">
    <div className="flip-card-front flex flex-col">
      <img className="darkened-image h-[300px] sm:h-auto" src={spouseVisa} alt="" />
      <h1 className="fixed text-white font-bold text-xl md:text-2xl">Spouse Visa</h1>
    <button className="btn btn-outline text-white lg:hidden fixed bottom-6">Read More</button>
    </div>
    <div className="flip-card-back">
      <div className="w-[300px] h-[300px] bg-base-100 shadow-xl transform transition-transform hover:scale-105 text-black">
  <div className="flex flex-col gap-3 px-3 pt-5">
          <h2 className="text-3xl sm:text-5xl text-red-700"><i className="fa-solid fa-ring"></i></h2>
          <p className="font-bold text-blue-950">Spouse Visa</p>
          <p className="font-small font-light sm:flex">If you are a US citizen, you have 2 ways to bring your foreign spouse to the US to live...</p>
          <button className="btn btn-outline btn-error ">Read More</button>
        </div>
      </div>
    </div>
  </div>
</div>




<div onClick={() => { navigate('/services/visitor-visa') }} className="flip-card" tabIndex="0">
  <div className="flip-card-inner">
    <div className="flip-card-front flex flex-col">
      <img className="darkened-image h-[300px] sm:h-auto" src={visitorVisa} alt="" />
      <h1 className="fixed text-white font-bold text-xl md:text-2xl">Visitor Visa</h1>
    <button className="btn btn-outline text-white lg:hidden fixed bottom-6">Read More</button>
    </div>
    <div className="flip-card-back">
      <div className="w-[300px] h-[300px] bg-base-100 shadow-xl transform transition-transform hover:scale-105 text-black">
  <div className="flex flex-col gap-3 px-3 pt-5">
          <h2 className="text-3xl sm:text-5xl text-red-700"><i className="fa-solid fa-people-group"></i></h2>
          <p className="font-bold text-blue-950">Visitor Visa</p>
          <p className="font-small font-light sm:flex">Visitor visas are non-immigrant visas for individuals who want to enter Canada temporarily for business...</p>
          <button className="btn btn-outline btn-error ">Read More</button>
        </div>
      </div>
    </div>
  </div>
</div>




<div onClick={() => { navigate('/services/pr-immigration') }} className="flip-card" tabIndex="0">
  <div className="flip-card-inner">
    <div className="flip-card-front flex flex-col">
      <img className="darkened-image h-[300px] sm:h-auto" src={pr} alt="" />
      <h1 className="fixed text-white font-bold text-xl md:text-2xl">PR</h1>
    <button className="btn btn-outline text-white lg:hidden fixed bottom-6">Read More</button>
    </div>
    <div className="flip-card-back">
      <div className="w-[300px] h-[300px] bg-base-100 shadow-xl transform transition-transform hover:scale-105 text-black">
  <div className="flex flex-col gap-3 px-3 pt-5">
          <h2 className="text-3xl sm:text-5xl text-red-700"><i className="fa-solid fa-people-group"></i></h2>
          <p className="font-bold text-blue-950">PR</p>
          <p className="font-small font-light sm:flex">Permanent resident (PR) is the set of techniques and strategies related to managing how information about an...</p>
          <button className="btn btn-outline btn-error ">Read More</button>
        </div>
      </div>
    </div>
  </div>
</div>




<div onClick={() => { navigate('/services/accommodation') }} className="flip-card" tabIndex="0">
  <div className="flip-card-inner">
    <div className="flip-card-front flex flex-col gap-5">
      <img className="darkened-image h-[300px] sm:h-auto" src={accommodation} alt="" />
      <h1 className="fixed text-white font-bold text-xl md:text-2xl">Accommodation</h1>
    <button className="btn btn-outline text-white lg:hidden fixed bottom-6">Read More</button>
    </div>
    <div className="flip-card-back">
      <div className="w-[300px] h-[300px] bg-base-100 shadow-xl transform transition-transform hover:scale-105 text-black">
  <div className="flex flex-col gap-3 px-3 pt-5">
          <h2 className="text-3xl sm:text-5xl text-red-700"><i className="fa-solid fa-credit-card"></i></h2>
          <p className="font-bold text-blue-950">Accommodation</p>
          <p className="font-small font-light sm:flex">Homely PG and Hostel around campus with monthly food. Stay connected with your family from your landing...</p>
          <button className="btn btn-outline btn-error ">Read More</button>
        </div>
      </div>
    </div>
  </div>
</div>



<div onClick={() => { navigate('/services/bank-solvency') }} className="flip-card" tabIndex="0">
  <div className="flip-card-inner">
    <div className="flip-card-front flex flex-col gap-5">
      <img className="darkened-image h-[300px] sm:h-auto" src={bank} alt="" />
      <h1 className="fixed text-white font-bold text-xl md:text-2xl">Bank Solvency</h1>
    <button className="btn btn-outline text-white lg:hidden fixed bottom-6">Read More</button>
    </div>
    <div className="flip-card-back">
      <div className="w-[300px] h-[300px] bg-base-100 shadow-xl transform transition-transform hover:scale-105 text-black">
  <div className="flex flex-col gap-3 px-3 pt-5">
          <h2 className="text-3xl sm:text-5xl text-red-700"><i className="fa-solid fa-plane"></i></h2>
          <p className="font-bold text-blue-950">Bank Solvency</p>
          <p className="font-small font-light sm:flex">Homely PG and Hostel around campus with monthly food. Stay connected with your family from your landing...</p>
          <button className="btn btn-outline btn-error ">Read More</button>
        </div>
      </div>
    </div>
  </div>
</div>



<div onClick={() => { navigate('/services/air-ticket') }} className="flip-card" tabIndex="0">
  <div className="flip-card-inner">
    <div className="flip-card-front flex flex-col gap-5">
      <img className="darkened-image h-[300px] sm:h-auto" src={airTicket} alt="" />
      <h1 className="fixed text-white font-bold text-xl md:text-2xl">Air Ticket</h1>
    <button className="btn btn-outline text-white lg:hidden fixed bottom-6">Read More</button>
    </div>
    <div className="flip-card-back">
      <div className="w-[300px] h-[300px] bg-base-100 shadow-xl transform transition-transform hover:scale-105 text-black">
  <div className="flex flex-col gap-3 px-3 pt-5">
          <h2 className="text-3xl sm:text-5xl text-red-700"><i className="fa-solid fa-people-group"></i></h2>
          <p className="font-bold text-blue-950">Air Ticket</p>
          <p className="font-small font-light sm:flex">Homely PG and Hostel around campus with monthly food. Stay connected with your family from your landing...</p>
          <button className="btn btn-outline btn-error ">Read More</button>
        </div>
      </div>
    </div>
  </div>
</div>



<div onClick={() => { navigate('/services/pre-departure-guidance') }} className="flip-card" tabIndex="0">
  <div className="flip-card-inner">
    <div className="flip-card-front flex flex-col gap-5">
      <img className="darkened-image h-[300px] sm:h-auto" src={pre} alt="" />
      <h1 className="fixed text-white font-bold text-xl md:text-2xl">Pre-Departure Guidance</h1>
    <button className="btn btn-outline text-white lg:hidden fixed bottom-6">Read More</button>
    </div>
    <div className="flip-card-back">
      <div className="w-[300px] h-[300px] bg-base-100 shadow-xl transform transition-transform hover:scale-105 text-black">
  <div className="flex flex-col gap-3 px-3 pt-5">
          <h2 className="text-3xl sm:text-5xl text-red-700"><i className="fa-solid fa-credit-card"></i></h2>
          <p className="font-bold text-blue-950">Pre-Departure Guidance</p>
          <p className="font-small font-light sm:flex">Homely PG and Hostel around campus and Stay connected with your family from your landing...</p>
          <button className="btn btn-outline btn-error ">Read More</button>
        </div>
      </div>
    </div>
  </div>
</div>



            </div>

        </div>
            
        </div>
    );
};

export default Services;