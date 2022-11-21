import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import { useState } from "react";
import { Link } from "react-router-dom";
import adImg from "./assets/ad-img.jpeg";
import { useLocation } from "react-router-dom";
import Community from "./Components/community";
import Signin from "./Components/Signin";
import Forgot from "./Components/Forgot";
import Universityform from "./Components/Universityform";
import Itsoftform from "./Components/Itsoftform";
import Fresherform from "./Components/Fresherform";
import ChannelForm from "./Components/ChannelForm";
import TrainerForm from "./Components/TrainerForm";

// import { UserContext } from "./UserContext";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  const [display, setDisplay] = useState("block");

  const location = useLocation();

  const routing = useRoutes(routes);

  return (
    <div className="App">
      {location.pathname === "/" ? (
        <>
          <div className="ad_container" style={{ display: display }}>
            <img
              className="ad"
              style={{ display: display }}
              src={adImg}
              alt=""
            />
            <p
              className="close-btn"
              style={{ display: display }}
              onClick={() => setDisplay("none")}
            >
              X
            </p>
            <Link to="/form">
              <button style={{ display: display }} className="apply-btn">
                Apply Now
              </button>
            </Link>
          </div>
        </>
      ) : (
        ""
      )}

      {routing}
    </div>
  );
}

export default App;
