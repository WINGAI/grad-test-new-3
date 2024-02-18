import { useNavigate } from "react-router-dom";
import backgroundImg from "../../assets/home/index/Home-Service.jpg"
const HomeServices = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="hero min-h-screen py-10"
        style={{
          backgroundImage:
            `url('${backgroundImg}')`,
        }}>
        <div className="hero-content text-center text-neutral-content flex flex-col gap-32">
          <div>
            <h1 className="text-4xl p-5 text-red-700 font-bold">Services</h1>
            <p className="text-6xl font-bold">Our Value Added Services</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 xl:gap-20">
          <div

  onClick={() => {
    navigate("/services/career-counseling");
  }}
  className="card w-60 md:w-72 xl:w-96 bg-base-100 shadow-xl text-black"
  style={{ transition: "transform 0.3s ease-in-out" }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
>
              <div className="card-body">
                <h2 className="text-5xl text-red-700">
                <i className="fa-solid fa-road rotate-sideways"></i> {/* Apply the rotate-360 class here */}
                </h2>
                <p className="font-bold text-blue-950">Career Counseling</p>
                <p className="font-small font-light">
                  Developing a long lasting relationship and identifying the
                  interests and the goals of students, our career counseling
                  assists...
                </p>
              </div>
            </div>

            <div

  onClick={() => {
    navigate("/services/university-selection");
  }}
  className="card w-60 md:w-72 xl:w-96 bg-base-100 shadow-xl text-black"
  style={{ transition: "transform 0.3s ease-in-out" }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
>
              <div className="card-body">
                <h2 className="text-5xl text-red-700">
                  <i className="fa-solid fa-building-columns rotate-sideways"></i>
                </h2>
                <p className="font-bold text-blue-950">University Selection</p>
                <p className="font-small font-light">
                  Selecting the right University is a daunting task given the
                  vast choices that are available. Not to worry we make...
                </p>
              </div>
            </div>

            <div

  onClick={() => {
    navigate("/services/visa-document");
  }}
  className="card w-60 md:w-72 xl:w-96 bg-base-100 shadow-xl text-black"
  style={{ transition: "transform 0.3s ease-in-out" }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
>
              <div className="card-body">
                <h2 className="text-5xl text-red-700">
                  <i className="fa-solid fa-file rotate-sideways"></i>
                </h2>
                <p className="font-bold text-blue-950">Visa Document</p>
                <p className="font-small font-light">
                  Visa documentation, the most tedious and demanding aspect of
                  their oversease education proccess. Bearing this in mind...
                </p>
              </div>
            </div>

            <div

  onClick={() => {
    navigate("/services/student-visa");
  }}
  className="card w-60 md:w-72 xl:w-96 bg-base-100 shadow-xl text-black"
  style={{ transition: "transform 0.3s ease-in-out" }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
>
              <div className="card-body">
                <h2 className="text-5xl text-red-700">
                  <i className="fa-solid fa-graduation-cap rotate-sideways"></i>
                </h2>
                <p className="font-bold text-blue-950">Student Visa</p>
                <p className="font-small font-light">
                  Student visa, as the name suggests are visas issued to
                  applicants whose primary purpose of visit...
                </p>
              </div>
            </div>

            <div

  onClick={() => {
    navigate("/services/sop-resume-prep");
  }}
  className="card w-60 md:w-72 xl:w-96 bg-base-100 shadow-xl text-black"
  style={{ transition: "transform 0.3s ease-in-out" }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
>
              <div className="card-body">
                <h2 className="text-5xl text-red-700">
                  <i className="fa-regular fa-file rotate-sideways"></i>
                </h2>
                <p className="font-bold text-blue-950">
                  SOP|Resume Preparation
                </p>
                <p className="font-small font-light">
                  Effective profile writing, goal projection, Academic.
                  Relevantion and strong connection to Bangladesh...
                </p>
              </div>
            </div>

            <div

  onClick={() => {
    navigate("/services/spouse-visa");
  }}
  className="card w-60 md:w-72 xl:w-96 bg-base-100 shadow-xl text-black"
  style={{ transition: "transform 0.3s ease-in-out" }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
>
              <div className="card-body">
                <h2 className="text-5xl text-red-700">
                  <i className="fa-solid fa-ring rotate-sideways"></i>
                </h2>
                <p className="font-bold text-blue-950">Spouse Visa</p>
                <p className="font-small font-light">
                  If you are a US citizen you have 2 ways to bring your foreign
                  spouse to the us to live
                </p>
              </div>
            </div>

            <div

  onClick={() => {
    navigate("/services/visitor-visa");
  }}
  className="card w-60 md:w-72 xl:w-96 bg-base-100 shadow-xl text-black"
  style={{ transition: "transform 0.3s ease-in-out" }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
>
              <div className="card-body">
                <h2 className="text-5xl text-red-700">
                  <i className="fa-solid fa-plane rotate-sideways"></i>
                </h2>
                <p className="font-bold text-blue-950">Visitor visa</p>
                <p className="font-small font-light">
                  Visitors visa are non immigrant visas for person who want to
                  enter the Canada temporarily for business
                </p>
              </div>
            </div>

            <div

  onClick={() => {
    navigate("/services/pr-immigration");
  }}
  className="card w-60 md:w-72 xl:w-96 bg-base-100 shadow-xl text-black"
  style={{ transition: "transform 0.3s ease-in-out" }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
>
              <div className="card-body">
                <h2 className="text-5xl text-red-700">
                  <i className="fa-solid fa-people-group rotate-sideways"></i>
                </h2>
                <p className="font-bold text-blue-950">PR</p>
                <p className="font-small font-light">
                  Permanent resident (PR) is the set of techniques and
                  strategies related to managing how information about an...
                </p>
              </div>
            </div>

            <div

  onClick={() => {
    navigate("/services/accommodation");
  }}
  className="card w-60 md:w-72 xl:w-96 bg-base-100 shadow-xl text-black"
  style={{ transition: "transform 0.3s ease-in-out" }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
>
              <div className="card-body">
                <h2 className="text-5xl text-red-700">
                  <i className="fa-solid fa-building rotate-sideways"></i>
                </h2>
                <p className="font-bold text-blue-950">Accommodation</p>
                <p className="font-small font-light">
                  Homely PG and Hostel around campus with monthly food. Stay
                  connected with your family from your landing...
                </p>
              </div>
            </div>

            <div

  onClick={() => {
    navigate("/services/bank-solvency");
  }}
  className="card w-60 md:w-72 xl:w-96 bg-base-100 shadow-xl text-black"
  style={{ transition: "transform 0.3s ease-in-out" }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
>
              <div className="card-body">
                <h2 className="text-5xl text-red-700">
                <i className="fa-solid fa-piggy-bank"></i>   
                </h2>
                <p className="font-bold text-blue-950">Bank Solvency</p>
                <p className="font-small font-light">Bank solvency ensures a bank&apos;s financial stability, allowing it to honor obligations, protect deposits, and absorb losses, ensuring confidence for customers.</p>
              </div>
            </div>

            <div

  onClick={() => {
    navigate("/services/air-ticket");
  }}
  className="card w-60 md:w-72 xl:w-96 bg-base-100 shadow-xl text-black"
  style={{ transition: "transform 0.3s ease-in-out" }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
>
              <div className="card-body">
                <h2 className="text-5xl text-red-700">
                <i className="fa-solid fa-ticket"></i>                
                </h2>
                <p className="font-bold text-blue-950">Air Ticket</p>
                <p className="font-small font-light">
                An air ticket is a purchased document granting permission for an individual to board a specific flight at a designated time and date.
                </p>
              </div>
            </div>

            <div

  onClick={() => {
    navigate("/services/pre-departure-guidance");
  }}
  className="card w-60 md:w-72 xl:w-96 bg-base-100 shadow-xl text-black"
  style={{ transition: "transform 0.3s ease-in-out" }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
>
              <div className="card-body">
                <h2 className="text-5xl text-red-700">
                  <i className="fa-solid fa-calendar-check rotate-sideways"></i>
                </h2>
                <p className="font-bold text-blue-950">
                  Pre-Departure Guidance
                </p>
                <p className="font-small font-light">
                Pre-departure guidance provides essential advice and support before travel for a prepared journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
