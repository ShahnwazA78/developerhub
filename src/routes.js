import Layout from "./Layout";
import LandingPage from "./Pages/LandingPage";
import FormBasic from "./Components/FormBasic";
import Blockchain from "./Pages/Blockchain";
import Ar_vr from "./Pages/Ar_vr";
import Footer from "./Components/Footer";
import MetaPage from "./Pages/MetaPage";
import ComingSoon from "./Components/ComingSoon";
import Aiml from "./Pages/Aiml";
import NavComponent from "./Components/NavbarComponent";
import AdminForm from "./Pages/AdminForm";
import University from "./Components/University";
import Forum from "./Components/Forum";
import Jobs from "./Pages/Jobs";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import ScrollToTop from "react-scroll-to-top";
import Feedback from "./Components/Feedback";
import Fresher from "./Components/Fresher";
import Corporate from "./Components/Corporate";
import Software from "./Components/Software";
import Deactivate from "./Components/Deactivate";
import Community from "./Components/community";
import Signin from "./Components/Signin";
import Forgot from "./Components/Forgot";
import Universityform from "./Components/Universityform";
import Itsoftform from "./Components/Itsoftform";
import Fresherform from "./Components/Fresherform";
import ChannelForm from "./Components/ChannelForm";
import TrainerForm from "./Components/TrainerForm";
import AdminLayout from "./AdminLayout";
import AdminDashboard from "./Pages/AdminDashboard";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <LandingPage /> },
      { path: "signin", element: <Signin /> },
      { path: "forgot", element: <Forgot /> },
      { path: "community", element: <Community /> },
      { path: "deactivate", element: <Deactivate /> },
      { path: "software", element: <Software /> },
      { path: "corporate", element: <Corporate /> },
      { path: "fresher", element: <Fresher /> },
      { path: "feedback", element: <Feedback /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "about", element: <AboutUs /> },
      { path: "job", element: <Jobs /> },
      { path: "form", element: <FormBasic /> },
      { path: "blockchain", element: <Blockchain /> },
      { path: "ar-vr", element: <Ar_vr /> },
      { path: "meta", element: <MetaPage /> },
      { path: "aiml", element: <Aiml /> },
      { path: "adminForm", element: <AdminForm /> },
      { path: "coming", element: <ComingSoon /> },
      { path: "University", element: <University /> },
      { path: "forum", element: <Forum /> },
      { path: "forgot", element: <Forum /> },
      { path: "univ_form", element: <Universityform /> },
      { path: "ITsoft_form", element: <Itsoftform /> },
      { path: "fresher_form", element: <Fresherform /> },
      { path: "Channel_form", element: <ChannelForm /> },
      { path: "Trainer_form", element: <TrainerForm /> },
    ],
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [{ path: "dashboard", element: <AdminDashboard /> }],
  },
];

export default routes;
