import { useLoaderData } from "react-router-dom";
import UniCard from "../../../shared/uniCard";
import newbrun from "../../../assets/study-abroad/canada/new brunswick/1.jpeg"
import banner from "../../../assets/study-abroad/canada//new brunswick/banner.jpg"

const NovaScotia = () => {
    const uni =useLoaderData();
    return (
        <div>

        <div>
        <img className="w-full" src={banner} alt="" />
        </div>

        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">  
            <h1 className="font-bold text-3xl py-10 text-center lg:text-left">About New Brunswick</h1>
            <p className="pb-5">New Brunswick is the home to nearly 800,000 people and considered to be a smaller province with the area of 72,000 sq km. Bay of Fundy is one of the most famous attractions of New Brunswick as it holds the distinction for the highest tides in the world. </p>
            <div className="flex items-center gap-10 flex-col-reverse lg:flex-row">
                <img className="lg:w-1/2" src={newbrun} alt="" />
                <div className="flex flex-col gap-2">
                    <p>Students who are fond of living in a desirable small town then they should consider Fredericton, the capital of New Brunswick, as an obvious choice.</p>
                    <p>Also, educational institutions like university of New Brunswick rank among the top learning institutions of the world. Sectors like agriculture and forestry are the most developed in New Brunswick.</p>
                    <p><i className="fa-solid fa-angles-right text-black"></i> New Brunswick College of Craft and Design</p>
                    <p><i className="fa-solid fa-angles-right text-black"></i> New Brunswick Community College </p>
                    <p><i className="fa-solid fa-angles-right text-black"></i> Crandall University</p>
                    <p><i className="fa-solid fa-angles-right text-black"></i> Mount Allison University</p>
                    <p><i className="fa-solid fa-angles-right text-black"></i> Oulton College</p>
                    <p><i className="fa-solid fa-angles-right text-black"></i> Université De Moncton</p>

                </div>
            </div>
        </div>


        <div>
            <h1 className="font-bold text-3xl py-10 text-center">New Brunswick College/Universities</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
                {uni.map((uni,ind)=>(<UniCard key={ind} uni={uni}></UniCard>))}
            </div>
        </div>
  
        </div>
    );
};

export default NovaScotia;