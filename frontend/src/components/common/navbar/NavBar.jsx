import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
const logo = "/logo_image.png";

const navItems = [
  { id: 1, name: "Home",      scrollTo: "introduction", path: "/" },
  { id: 2, name: "About",     scrollTo: "profile",      path: "/about" },
  { id: 3, name: "Process",   scrollTo: "work-process", path: "/process" },
  { id: 4, name: "Portfolio", scrollTo: "portfolio",    path: "/portfolio" },
  { id: 5, name: "Blog",      scrollTo: "blog",         path: "/blog" },
  { id: 6, name: "Services",  scrollTo: "services",     path: "/services" },
];

const NavBar = () => {
  const [position, setPosition] = useState(0);
  const navigate = useNavigate();

  const handleMenuClick = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  const menu = navItems.map((item) => (
    <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
      <Link
        onClick={handleMenuClick}
        to={item.scrollTo}
        smooth={true}
        duration={1000}
        spy={true}
        offset={-140}
        activeStyle={{
          backgroundColor: "#9929fb",
          color: "white",
        }}
        className={`hover:text-picto-primary px-5 py-3 mx-1`}
        onActivate={() => {
          // Update URL without adding to history to prevent back-button loop
          navigate(item.path, { replace: true });
        }}
      >
        {item.name}
      </Link>
    </li>
  ));

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 ${
        position > 50
          ? "bg-soft-white border-b border-gray-300"
          : "bg-white border-white"
      } z-50 transition-all duration-1000`}
    >
      <div className="navbar flex justify-between mx-auto content">
        <div className="flex items-center justify-between">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-lg dropdown-content rounded-box z-1 mt-3 w-lvw p-2 shadow font-semibold flex-nowrap bg-white text-black`}
            >
              {menu}
            </ul>
          </div>

          <Link
            href="#introduction"
            to={`introduction`}
            smooth={true}
            duration={900}
            className="flex items-center border-0 lg:max-xxl:ps-5"
            onActivate={() => navigate("/", { replace: true })}
          >
            <div className="h-10 w-10 sm:h-14 sm:w-14 rounded-full overflow-hidden flex items-center justify-center bg-white border border-gray-100 shadow-sm">
              <img
                src={logo}
                className="h-full w-full object-cover"
                alt="Aniket Singh logo"
              />
            </div>
            <p className="text-2xl sm:text-[32px] my-auto ms-[12px] font-semibold">
              Aniket Singh
            </p>
          </Link>
        </div>

        <div className="lg:flex items-center">
          <ul className="hidden lg:flex menu menu-horizontal text-[16px] font-medium md:shrink-0">
            {menu}
          </ul>
          <p className="">
            <Link
              className="btn btn-sm xs:btn-md sm:btn-lg btn-primary"
              href="#contact"
              to={`contact`}
              smooth={true}
              duration={900}
              onActivate={() => navigate("/contact", { replace: true })}
            >
              Contact
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
