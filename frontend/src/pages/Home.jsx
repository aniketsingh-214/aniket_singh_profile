import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import WorkTogether from "../components/workTogether/WorkTogether";
import Blog from "../components/blog/Blog";
import Profession from "../components/profession/Profession";
import HappyClients from "../components/happyClients/HappyClients";
import Testimonial from "../components/testimonial/Testimonial";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Map paths to section IDs
    const pathToSection = {
      "/": "introduction",
      "/about": "profile",
      "/process": "work-process",
      "/portfolio": "portfolio",
      "/blog": "blog",
      "/services": "services",
      "/contact": "contact",
    };

    const sectionId = pathToSection[pathname];
    if (sectionId) {
      scroller.scrollTo(sectionId, {
        duration: 1000,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -140, // Match NavBar offset
      });
    }
  }, [pathname]);

  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>
      <div className="bg-soft-white pt-30">
        <WorkProcess />
      </div>
      <Portfolio />
      <div className="bg-gray-900">
        <WorkTogether />
      </div>
      <div className="blog-background">
        <Blog />
      </div>
      <div className="bg-soft-white">
        <Profession />
      </div>
      <HappyClients />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;
