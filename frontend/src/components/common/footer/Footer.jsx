const logo = "/logo_image.png";

/* Footer navLinks */
const navItems = [
  { id: 1, name: "Home",      url: "introduction" },
  { id: 2, name: "About",     url: "profile" },
  { id: 3, name: "Process",   url: "work-process" },
  { id: 4, name: "Portfolio", url: "portfolio" },
  { id: 5, name: "Blog",      url: "blog" },
  { id: 6, name: "Services",  url: "services" },
  { id: 7, name: "Contact",   url: "contact" },
];
const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="pt-25 md:pt-40 content max-2xl:px-3">
      <div className="flex max-md:flex-col justify-between mx-0 items-center h-full w-full text-neutral-200">
        <a href="#introduction" className="flex items-center border-0">
          <div className="h-10 w-10 sm:h-14 sm:w-14 rounded-full overflow-hidden flex items-center justify-center bg-white border border-gray-100 shadow-sm">
            <img
              src={logo}
              className="h-full w-full object-contain p-1"
              alt="Aniket Singh logo"
            />
          </div>
          <p className="text-3xl sm:text-[32px] my-auto ms-[12px] font-semibold">
            Aniket Singh
          </p>
        </a>
        <div className="mx-7 max-md:my-7 text-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              className="mx-2 group inline-block relative w-fit text-[12px] sm:text-[16px]"
              href={`#${item.url}`}
            >
              {item.name}
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 duration-300 group-hover:scale-x-100"></span>
            </a>
          ))}
        </div>
        <p className="text-[12px] sm:text-[16px]">
          Copyright &copy; {copyrightYear} Aniket Singh.
        </p>
      </div>
      <p className="text-white text-center max-xs:text-[12px] max-md:text-[14px] w-full py-10">
        Designed &amp; Developed by{" "}
        <a
          href="https://github.com/aniketsingh-214/"
          className="underline font-bold"
          target="_blank"
          rel="noreferrer"
        >
          Aniket Singh
        </a>
      </p>
    </div>
  );
};

export default Footer;
