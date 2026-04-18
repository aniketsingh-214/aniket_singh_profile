// Real profile picture from public/profile_pic.jpeg
const profilePic = "/profile_pic.jpeg";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Information summary data — Aniket's real stats
const informationSummaryData = [
  {
    id: 1,
    title: "B.Tech CSE",
    description: "IIIT Nagpur",
  },
  {
    id: 2,
    title: "Projects Built",
    description: "10+",
  },
  {
    id: 3,
    title: "LeetCode Problems",
    description: "200+",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I&apos;m
            <span className="text-nowrap shrink-0 inline-block w-full">
              Aniket Singh
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6 text-gray-600 leading-relaxed">
            Hi, I&apos;m Aniket Singh, a{" "}
            <span className="bg-highlight">B.Tech CSE graduate</span> from IIIT
            Nagpur with a strong interest in{" "}
            <span className="bg-highlight">full-stack development</span> and
            real-world problem-solving. I&apos;ve built and deployed multiple
            end-to-end projects using React.js, Node.js, MongoDB, and have
            hands-on experience in APIs, authentication, and real-time systems.
            I&apos;m passionate about learning, building impactful products, and
            growing as a developer every day.
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="mailto:aniketsingh7141340@gmail.com"
            >
              Say Hello!
            </a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={profilePic}
          alt="Aniket Singh"
        />
      </div>
    </div>
  );
};

export default Introduction;
