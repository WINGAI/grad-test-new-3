import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import AboutUs from "../pages/aboutUs/AboutUs";
import VisionMission from "../pages/aboutUs/VisionMission";
import Services from "../pages/services/Services";
import CareerCounseling from "../pages/services/CareerCounseling";
import UniversitySelection from "../pages/services/UniversitySelection";
import VisaDocument from "../pages/services/VisaDocument";
import StudentVisa from "../pages/services/StudentVisa";
import Sop from "../pages/services/SOP";
import SpouseVisa from "../pages/services/SpouseVisa";
import VisitorVisa from "../pages/services/VisitorVisa";
import Pr from "../pages/services/Pr";
import Accommodation from "../pages/services/Accommodation";
import BankSolvency from "../pages/services/BankSolvency";
import AirTicket from "../pages/services/AirTicket";
import PreDeparture from "../pages/services/PreDeparture";
import StudyAbroad from "../pages/studyAbroad/StudyAbroad";
import Canada from "../pages/studyAbroad/Canada/Canada";
import Ontario from "../pages/studyAbroad/Canada/Ontario";
import Quebec from "../pages/studyAbroad/Canada/Quebec";
import Manitoba from "../pages/studyAbroad/Canada/Manitoba";
import Saskatchewan from "../pages/studyAbroad/Canada/Saskatchewan";
import Alberta from "../pages/studyAbroad/Canada/Alberta";
import BritishColumbia from "../pages/studyAbroad/Canada/BritishColumbia";
import Newfoundland from "../pages/studyAbroad/Canada/Newfoundland";
import NovaScotia from "../pages/studyAbroad/Canada/NovaScotia";
import NewBrunswick from "../pages/studyAbroad/Canada/NewBrunswick";
import Usa from "../pages/studyAbroad/Usa/Usa";
import Uk from "../pages/studyAbroad/Uk/Uk";
import Australia from "../pages/studyAbroad/Australia/Australia";
import Error from "../pages/error/Error";
import Inquiry from "../pages/Inquiry/Inquiry";
import ContactUs from "../pages/contactUs/ContactUs";
// import MeetTeam from "../pages/meetTeam/meetteam";
import MeetTeam from "../pages/meetTeam/meetteam";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about-us',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/about-us/vision-mission',
                element: <VisionMission></VisionMission>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/services/career-counseling',
                element: <CareerCounseling></CareerCounseling>
            },
            {
                path: '/services/university-selection',
                element: <UniversitySelection></UniversitySelection>
            },
            {
                path: '/services/visa-document',
                element: <VisaDocument></VisaDocument>
            },
            {
                path: '/services/student-visa',
                element: <StudentVisa></StudentVisa>
            },
            {
                path: '/services/sop-resume-prep',
                element: <Sop></Sop>
            },
            {
                path: '/services/spouse-visa',
                element: <SpouseVisa></SpouseVisa>
            },
            {
                path: '/services/visitor-visa',
                element: <VisitorVisa></VisitorVisa>
            },
            {
                path: '/services/pr-immigration',
                element: <Pr></Pr>
            },
            {
                path: '/services/accommodation',
                element: <Accommodation></Accommodation>
            },
            {
                path: '/services/bank-solvency',
                element: <BankSolvency></BankSolvency>
            },
            {
                path: '/services/air-ticket',
                element: <AirTicket></AirTicket>
            },
            {
                path: '/services/pre-departure-guidance',
                element: <PreDeparture></PreDeparture>
            },
            {
                path: '/study-abroad',
                element: <StudyAbroad></StudyAbroad>
            },
            {
                path: '/study-abroad/canada',
                element: <Canada></Canada>
            },
            {
                path: '/study-abroad/canada/ontario',
                element: <Ontario></Ontario>,
                loader: () => fetch('/ontario.json')

            },
            {
                path: '/study-abroad/canada/quebec',
                element: <Quebec></Quebec>,
                loader: () => fetch('/quebec.json')
            },
            {
                path: '/study-abroad/canada/manitoba',
                element: <Manitoba></Manitoba>,
                loader: () => fetch('/manitoba.json')

            },
            {
                path: '/study-abroad/canada/saskatchewan',
                element: <Saskatchewan></Saskatchewan>,
                loader: () => fetch('/saskatchewan.json')
            },
            {
                path: '/study-abroad/canada/alberta',
                element: <Alberta></Alberta>,
                loader: () => fetch('/alberta.json')

            },
            {
                path: '/study-abroad/canada/british-columbia',
                element: <BritishColumbia></BritishColumbia>,
                loader: () => fetch('/britishColumbia.json')
            },
            {
                path: '/study-abroad/canada/newfoundland',
                element: <Newfoundland></Newfoundland>,
                loader: ()=> fetch('/newfoundland.json')
            },
            {
                path: '/study-abroad/canada/nova-scotia',
                element: <NovaScotia></NovaScotia>,
                loader: ()=> fetch('/novaScotia.json')
            },
            {
                path: '/study-abroad/canada/new-brunswick',
                element: <NewBrunswick></NewBrunswick>,
                loader: ()=> fetch('/newBrunswick.json')
            },
            {
                path: '/study-abroad/usa',
                element: <Usa></Usa>
            },
            {
                path: '/study-abroad/uk',
                element: <Uk></Uk>
            },
            {
                path: '/study-abroad/australia',
                element: <Australia></Australia>
            },
            {
                path: '/inquiry',
                element: <Inquiry></Inquiry>
            },
            {
                path: '/contact-us',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/meet-our-team',
                element: <MeetTeam></MeetTeam>
            },


        ]
    }
])

export default router;