import img1 from "../../assets/images/blog/img1.jpg";
import img2 from "../../assets/images/blog/img2.png";
import img3 from "../../assets/images/blog/img3.png";
import img4 from "../../assets/images/blog/img4.jfif";
import img5 from "../../assets/images/blog/img5.png";
import img6 from "../../assets/images/blog/img6.jfif";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

// Breakpoints for swiperJS
const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const blogData = [
  {
    id: 1,
    image: img1,
    date: "10 Apr, 2026",
    comments: 0,
    title: "How I Built a Real-Time Chat App Using MERN and Socket.io",
    link: "#!",
  },
  {
    id: 2,
    image: img2,
    date: "05 Apr, 2026",
    comments: 0,
    title: "Understanding JWT Authentication in Simple Terms",
    link: "#!",
  },
  {
    id: 3,
    image: img3,
    date: "28 Mar, 2026",
    comments: 0,
    title: "How to Design Clean and Scalable REST APIs",
    link: "#!",
  },
  {
    id: 4,
    image: img4,
    date: "20 Mar, 2026",
    comments: 0,
    title: "Improving Web App Performance: What Actually Works",
    link: "#!",
  },
  {
    id: 5,
    image: img5,
    date: "15 Mar, 2026",
    comments: 0,
    title: "Connecting Frontend and Backend: A Practical Guide",
    link: "#!",
  },
  {
    id: 6,
    image: img6,
    date: "10 Mar, 2026",
    comments: 0,
    title: "Lessons Learned from Building Full-Stack Projects",
    link: "#!",
  },
];

const Blog = () => {
  return (
    <div className="content py-25 px-2 relative" id="blog">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">Blog</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          Check out my recent blog posts where I share insights on design,
          development, and the latest industry trends.
        </p>
      </div>
      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {blogData?.map((data, index) => (
          <SwiperSlide
            key={index}
            className="mb-10" /* pagination margin bottom to 40px */
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <MonoBlog data={data} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;
