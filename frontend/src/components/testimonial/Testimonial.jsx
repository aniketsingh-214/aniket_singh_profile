import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message:
      "Worked with Aniket during his internship and found him very reliable and consistent in delivering features on time.",
    quote: `He has a good understanding of both frontend and backend systems. He was able to take ownership of tasks, solve issues independently, and maintain clean code throughout the project.`,
    name: "Team Lead",
    designation: "Backend Team, Internship",
  },
  {
    message:
      "Aniket contributed to improving our frontend performance and overall user experience.",
    quote: `He quickly understood the project requirements and implemented changes that made the application faster and more responsive. Communication was smooth and he was open to feedback.`,
    name: "Project Manager",
    designation: "Frontend Team, Internship",
  },
  {
    message:
      "Strong problem-solving skills and a practical approach to development.",
    quote: `Aniket focuses on understanding the problem before jumping into coding. He writes structured and maintainable code, and is always willing to improve based on suggestions.`,
    name: "Senior Developer",
    designation: "Mentor / Reviewer",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Testimonial</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
