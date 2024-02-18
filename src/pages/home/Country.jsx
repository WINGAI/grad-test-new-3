import { useNavigate } from "react-router-dom";
import canada from "../../assets/canada Flag-01.png"
import uk from "../../assets/UK Flag-01.png"
import usa from "../../assets/USA Flag-01.png"
import canada2 from "../../assets/home/canada.jpg"
import uk2 from "../../assets/home/uk.jpg"
import usa2 from "../../assets/home/usa.jpg"

const Country = () => {
    const navigate = useNavigate();

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl hover:cursor-pointer gap-5 my-10 mx-auto">


<div onClick={()=>{navigate("/study-abroad/canada")}} data-aos-duration="2000" data-aos="fade-right" className="card w-80 bg-base-100 shadow-xl gap-5 p-5 mx-auto">
    <div><img src={canada2} alt="Shoes" /></div>
    <div className="flex gap-8 items-center">
       <h2 className="card-title">Canada</h2>
       <img className="w-10 flex items-center justify-center" src={canada} alt=""/>
    </div>
</div>

            
<div onClick={()=>{navigate("/study-abroad/usa")}} data-aos-duration="2000" data-aos="fade-up" className="card w-80 bg-base-100 shadow-xl gap-5 p-5 mx-auto">
    <div><img className="h-44" src={usa2} alt="Shoes" /></div>
    <div className="flex gap-8 items-center">
       <h2 className="card-title">USA</h2>
       <img className="w-10 flex items-center justify-center" src={usa} alt=""/>
    </div>
</div>

            
<div onClick={()=>{navigate("/study-abroad/uk")}} data-aos-duration="2000" data-aos="fade-left" className="card w-80 bg-base-100 shadow-xl gap-5 p-5 mx-auto">
    <div><img className="h-44" src={uk2} alt="Shoes" /></div>
    <div className="flex gap-8 items-center">
       <h2 className="card-title">UK</h2>
       <img className="w-10 flex items-center justify-center" src={uk} alt=""/>
    </div>
</div>

            
        </div>
    );
};

export default Country;
