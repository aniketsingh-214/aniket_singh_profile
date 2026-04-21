import { useEffect, useState } from "react";

const Roles = ({ role }) => {
  const [mouseHover, setMouseHover] = useState(false);
  useEffect(() => {
    window.addEventListener("mouseenter", (e) => {
      console.log("Mouse entered on the: ", e.target);
    });
  }, []);

  return (
    <div
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
      className="p-6 bg-white border border-gray-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 h-full transition-all duration-500 rounded-2xl flex flex-col relative overflow-hidden group"
    >
      <div
        className={`bg-primary absolute left-0 top-0 w-1 h-full transition-all duration-300 transform scale-y-0 origin-top ${
          mouseHover ? "scale-y-100" : ""
        }`}
      />
      
      <div className="flex flex-col h-full">
        {role?.icon && (
          <div className="text-4xl mb-4 bg-gray-50 w-16 h-16 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform duration-500">
            {role.icon}
          </div>
        )}
        
        <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
          {role?.title}
        </p>
        
        <p className="text-sm sm:text-[16px] font-normal text-gray-600 mb-4 leading-relaxed">
          {role?.description}
        </p>
        
        {role?.points && (
          <ul className="mt-auto space-y-1.5">
            {role.points.map((point, index) => (
              <li key={index} className="flex items-start text-xs sm:text-sm text-gray-600">
                <span className="text-primary mr-3 font-bold flex-shrink-0 text-lg">✔</span>
                <span className="font-medium">{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Roles;
