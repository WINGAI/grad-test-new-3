import { Link, useLoaderData } from "react-router-dom";
import UniCard from "../../../shared/uniCard";
import nova from "../../../assets/study-abroad/canada/nova scotia/1.jpg"
import nova2 from "../../../assets/study-abroad/canada/nova scotia/2.jpg"
import banner from "../../../assets/study-abroad/canada//nova scotia/banner.jpg"

const NovaScotia = () => {
    const uni =useLoaderData();
    return (
        <div>

        <div>
        <img className="w-full" src={banner} alt="" />
        </div>

        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">  
            <h1 className="font-bold text-3xl py-10 text-center lg:text-left">About Nova Scotia</h1>
            <p className="pb-5">Nova Scotia is an island with second smallest area among all the provinces but don’t assume it a neglected province as it has nearly a million residents which makes it a densely populated province. </p>
            <div className="flex items-center gap-10 flex-col-reverse lg:flex-row">
                <img className="w-1/2" src={nova} alt="" />
                <div className="flex flex-col gap-2">
                    <p>Construction and manufacturing have the highest contribution in terms of GDP of Nova Scotia. With low accommodation cost and high-quality educational institutions i.e., Nova scotia proves to be a smooth transitional and comfortable province for international students.</p>
                    <p><i className="fa-solid fa-angles-right text-black"></i> Dalhousie university</p>
                    <p><i className="fa-solid fa-angles-right text-black"></i> Cape Breton university </p>
                    <p><i className="fa-solid fa-angles-right text-black"></i> Nova scotia community college</p>
                    <p><i className="fa-solid fa-angles-right text-black"></i> St. Francis Xavier University</p>
                    <p><i className="fa-solid fa-angles-right text-black"></i> Acadia University</p>
                    <p><i className="fa-solid fa-angles-right text-black"></i> NSCAD University</p>

                </div>
            </div>
        </div>

        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">  
            <h1 className="text-3xl font-bold py-10 text-center lg:text-left">NOVA SCOTIA NOMINEE PROGRAM (NSNP)</h1>
            <div className="flex items-center gap-10 flex-col lg:flex-row">
                            <div className="flex flex-col gap-5">
                <p>-Prospective immigrants with the skills and experience are encouraged to apply by the province of Nova Scotia under the Nova Scotia Nominee Program (NSNP)</p>
                <p>-Applications are invited through different streams such as: Nova Scotia Labour Market Priorities, Labour Market Priorities for Physician, Physician, Entrepreneur, International Graduate Entrepreneur, International Graduates in Demand, Skilled Worker, Occupations in Demand & Express Entry</p>
                <p>-Fields like Construction Trades, Retail Sales, Registered Nurse, Physicians, Accountant, Heavy Equipment Operators, Cooks & Food Beverage Servers, Delivery Truck Driver, Software Developer and Light-Duty Cleaner are in good demand</p>
                <p><Link target="_blank" rel="noopener noreferrer" to="https://www.novascotiaimmigration.com">Website: <span className="text-logoRed underline">https://www.welcomebc.ca/Immigrate-to-B-C/About-The-BC-PNP</span></Link></p>

            </div>
            <img className="w-1/2" src={nova2} alt="" />
            </div>

        </div>

        <div>
            <h1 className="font-bold text-3xl py-10 text-center">Nova Scotia College/Universities</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
                {uni.map((uni,ind)=>(<UniCard key={ind} uni={uni}></UniCard>))}
            </div>
        </div>
  
        </div>
    );
};

export default NovaScotia;