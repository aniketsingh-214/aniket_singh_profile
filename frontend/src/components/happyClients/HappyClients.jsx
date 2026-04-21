import Marquee from "react-fast-marquee";
import aaizeltechLogo from "../../assets/aaizeltech logo.png";

const commonSVGClass = "h-16 sm:h-20 md:h-24 object-contain mx-4 sm:mx-8 md:mx-12";

const brandLogos = [
  <img
    src="https://cognifyz.com/wp-content/uploads/2025/09/Untitled-design-22.webp"
    alt="Cognifyz"
    className={commonSVGClass}
  />,
  <img
    src="https://media.licdn.com/dms/image/v2/D4E0BAQFkfFX45lQyoA/company-logo_200_200/company-logo_200_200/0/1722711156159/careerbytecode_logo?e=2147483647&v=beta&t=S8iNfAjHMKdNVtlj6K3avK1YsdoiwcgX3dX0uJdGxIg"
    alt="Careerbytecode"
    className={commonSVGClass}
  />,
  <img
    src="https://s3.ap-south-1.amazonaws.com/assets.ynos.in/startup-logos/YNOS0572835.jpg"
    alt="YNOS"
    className={commonSVGClass}
  />,
  <img src={aaizeltechLogo} alt="Aaizeltech" className={commonSVGClass} />,
];

const HappyClients = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2">
      <div className="max-w-144.25 text-center ">
        <p className="section-title mb-6">Happy Clients</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          I've had the pleasure of working with a diverse range of companies,
          from startups to established brands.
        </p>
      </div>
      <Marquee pauseOnHover={true} speed={60} className="mt-8 md:mt-16">
        <div className="flex items-center">
          {brandLogos?.map((logo, index) => (
            <div key={index}>{logo}</div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default HappyClients;
