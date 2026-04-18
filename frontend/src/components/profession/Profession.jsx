import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Full-Stack Development",
    description:
      "I build end-to-end web applications using React.js on the frontend and Node.js + Express on the backend, with MongoDB for data persistence. From REST APIs to real-time features.",
  },
  {
    id: 2,
    title: "API Design & Authentication",
    description:
      "I design and implement secure RESTful APIs with JWT authentication, role-based access control, and third-party integrations like OAuth and payment gateways.",
  },
  {
    id: 3,
    title: "Problem Solving & DSA",
    description:
      "With 200+ problems solved on LeetCode, I apply algorithmic thinking to write optimised, clean, and maintainable code — ensuring both performance and readability.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialise in building full-stack web applications — from intuitive
            React frontends to robust Node.js backends. Every project is
            crafted with clean code, solid architecture, and a focus on
            real-world impact.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach combines technical depth with product thinking — I
            don&apos;t just write code, I solve problems and build things
            people actually use.
          </p>
        </div>
        <a
          href="mailto:aniketsingh7141340@gmail.com"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
