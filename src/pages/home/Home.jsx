import AnimatedCount from "./AnimatedCount";
import Banner from "./Banner";
import Country from "./Country";
import HomeAbout from "./HomeAbout";
import HomePartner from "./HomePartner";
import HomeServices from "./HomeServices";
import Socials from "./Socials";

const Home = () => {
    return (
        <>
        <Banner></Banner>
        <Country/>
        <HomeAbout/>
        <HomeServices/>
        <HomePartner/>
        <AnimatedCount></AnimatedCount>
        <Socials/>
        </>
    );
};

export default Home;