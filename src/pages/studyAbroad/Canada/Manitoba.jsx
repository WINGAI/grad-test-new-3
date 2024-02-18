import { Link, useLoaderData } from "react-router-dom";
import UniCard from "../../../shared/uniCard";
import banner from "../../../assets/study-abroad/canada//manitoba/banner.jpg"
import manitoba  from "../../../assets/study-abroad/canada/manitoba/1.jpeg"
import manitoba2  from "../../../assets/study-abroad/canada/manitoba/2.jpg"

const Manitoba = () => {
    const uni =useLoaderData();
    return (
        <div>
        <div>
            <img className="w-full" src={banner} alt="" />
        </div>

        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">  
            <h1 className="font-bold text-3xl py-10 text-center lg:text-left">About Manitoba</h1>
            <p className="pb-10">A roaring sound of a polar bear! YES, you heard it right. Welcome to Manitoba the central province of Canada also known as the home of polar bears.</p>
            <div className="flex items-center gap-10 flex-col lg:flex-row">
                <img className="lg:w-1/2" src={manitoba} alt="" />
                <div className="flex flex-col gap-2">
                    <p>Apart from this, there are also many beautiful, world class museums and of course top rank university.  </p>
                    <h2 className="font-bold">Some popular cities of Manitoba</h2>
                    <p>These features make Manitoba a complete package of a roller coaster ride for students. </p>
                    <p><i className="fa-solid fa-angles-right text-black"></i> Winnipeg</p>
                    <p><i className="fa-solid fa-angles-right text-black"></i> Brandon </p>
                    <p><i className="fa-solid fa-angles-right text-black"></i> Springfield</p>
                    <p><i className="fa-solid fa-angles-right text-black"></i> Steinbach </p>
                    <p><i className="fa-solid fa-angles-right text-black"></i> Winkler</p>

                </div>
            </div>
        </div>

        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">  
            <h1 className="text-3xl font-bold py-10">MANITOBA PROVINCIAL NOMINEE PROGRAM (MPNP)</h1>
            <div className="flex items-center flex-col lg:flex-row">
                            <div className="flex flex-col gap-10">
                <p>-Oldest provincial nominee program of Canada – MPNP, is offered through five Streams: Skilled Worker in Manitoba Stream, Skilled Worker Overseas Stream, Manitoba Business Investor Stream, International Education Stream, & Modern Community Driven Stream</p>
                <p>-MPNP was launched to aid in the economic growth of Manitoba through immigration, based on the province’s economic and labour market needs</p>
                <p>-Qualified temporary foreign workers, international graduates, candidates with a permanent, full-time job offer from current Manitoba employer or ones who have worked with their current Manitoba employer for six months or more, are eligible to apply under MPNP</p>
                <p><Link target="_blank" rel="noopener noreferrer" to="https://immigratemanitoba.com/immigrate-to-manitoba/">Website: <span className="text-logoRed underline">https://www.welcomebc.ca/Immigrate-to-B-C/About-The-BC-PNP</span></Link></p>

            </div>
            <img src={manitoba2} alt="" />
            </div>

        </div>

        <div>
            <h1 className="font-bold text-3xl py-10 text-center">Manitoba College/Universities</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
                {uni.map((uni,ind)=>(<UniCard key={ind} uni={uni}></UniCard>))}
            </div>
        </div>
  
        </div>
    );
};

export default Manitoba;