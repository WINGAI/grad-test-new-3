import { useNavigate } from "react-router-dom";
import { FaPlane } from "react-icons/fa6";
import canada from "../../assets/canada Flag-01.png"
import usa from "../../assets/USA Flag-01.png"
import uk from "../../assets/Uk Flag-01.png"
import australia from "../../assets/Australia flag-01.png"
import canadaScene from "../../assets/study-abroad/canada.jpg"
import ukScene from "../../assets/study-abroad/uk.jpg"
import usaScene from "../../assets/study-abroad/usa.jpg"
import australiaScene from "../../assets/study-abroad/australia.jpg"
import banner from "../../assets/study-abroad/Study abroad banner.jpg"


const StudyAbroad = () => {
    const navigate = useNavigate();
    return (
        <div>

        <div>
            <img className="w-full" src={banner} alt="" />
        </div>

        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">  
            <h1 className="text-center font-bold text-3xl py-10">Countries We Serve</h1>
            <div>

                <div id="canada" className="flex flex-col justify-between pb-10">
                    
                    <img className="w-1/2 mx-auto" src={canadaScene} alt="" />

                    <div className="text-center flex flex-col">
                        <img className="hidden lg:flex mx-auto relative lg:bottom-10 lg:left-44 w-32" src={canada} alt="" />
                        <h2 className="font-bold text-2xl pb-5">Canada</h2>
                        <button onClick={()=>navigate('/study-abroad/canada')} className="btn max-w-max mx-auto bg-logoRed text-white">
                        <FaPlane />

  Read more
</button>

                    </div>

                </div>


                <div id="usa" className="flex flex-col justify-between pb-10">
                    
                    <img className="w-1/2 mx-auto" src={usaScene}alt="" />

                    <div className="text-center flex flex-col">
                    <img className="hidden lg:flex mx-auto relative bottom-10 left-44 w-32" src={usa} alt="" />
                        <h2 className="font-bold text-2xl pb-5">USA</h2>
                        <button onClick={()=>navigate('/study-abroad/usa')} className="btn max-w-max mx-auto bg-logoRed text-white">
                        <FaPlane />

  Read more
</button>

                    </div>

                </div>


                <div id="uk" className="flex flex-col justify-between pb-10">
                    
                    <img className="w-1/2 mx-auto" src={ukScene} alt="" />

                    <div className="text-center flex flex-col">
                    <img className="hidden lg:flex mx-auto relative bottom-10 left-44 w-32" src={uk} alt="" />
                        <h2 className="font-bold text-2xl pb-5">UK</h2>
                        <button onClick={()=>navigate('/study-abroad/uk')} className="btn max-w-max mx-auto bg-logoRed text-white">
                        <FaPlane />

  Read more
</button>

                    </div>

                </div>


                <div id="australia" className="flex flex-col justify-between pb-10">
                    
                    <img className="w-1/2 mx-auto" src={australiaScene} alt="" />

                    <div className="text-center flex flex-col">
                    <img className="hidden lg:flex mx-auto relative bottom-10 left-44 w-32" src={australia} alt="" />
                        <h2 className="font-bold text-2xl pb-5">Australia</h2>
                        <button onClick={()=>navigate('/study-abroad/australia')} className="btn max-w-max mx-auto bg-logoRed text-white">
                        <FaPlane />

  Read more
</button>

                    </div>

                </div>



            </div>
        </div>

        <div>

        </div>


            
        </div>
    );
};

export default StudyAbroad;