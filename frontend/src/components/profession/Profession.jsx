import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Full-Stack Web Development",
   
    description:
      "I build end-to-end web applications that are fast, scalable, and user-friendly. From frontend interfaces to backend systems, everything is designed to work seamlessly.",
    points: [
      "Custom web applications",
      "Scalable architecture",
      "Clean and maintainable code",
    ],
  },
  {
    id: 2,
    title: "API Development & Secure Systems",
   
    description:
      "I design and develop secure, high-performance APIs that power modern applications — ensuring smooth communication and data security.",
    points: [
      "RESTful API development",
      "JWT & OAuth authentication",
      "Payment & external integrations",
    ],
  },
  {
    id: 3,
    title: "Performance Optimization",
    description:
      "I optimize applications for speed, scalability, and reliability — ensuring your product performs smoothly even under heavy usage.",
    points: [
      "Faster load times & API responses",
      "Efficient database design",
      "Scalable backend solutions",
    ],
  },
  {
    id: 4,
    title: "Real-Time Systems Development",
    description:
      "I build real-time features like chat systems, live updates, and notifications using modern technologies for instant user interaction.",
    points: [
      "WebSockets & live data",
      "Chat & notification systems",
      "Low-latency architecture",
    ],
  },
];

const Profession = () => {
  return (
    <div className="max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5" id="services">
      {/* Header Section - Centered */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
        <p className="section-title">What I do?</p>
        <div className="mt-8">
          <p className="text-xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight">
            I help businesses build <span className="text-primary">scalable, high-performance</span> web applications that deliver results.
          </p>
          <p className="text-sm sm:text-lg font-normal text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            From intuitive user interfaces to robust backend systems, I handle the complete development lifecycle — ensuring your product is fast, secure, and built to grow. My approach goes beyond coding; I focus on understanding your requirements and delivering solutions that users love.
          </p>

          <a
            href="mailto:aniketsingh7141340@gmail.com"
            className="btn btn-primary text-white px-10 py-4 text-lg font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-all transform"
          >
            Let’s Build Something
          </a>
        </div>
      </div>

      {/* Cards Grid - 2x2 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mx-auto max-w-7xl">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
