import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAward, FaCalendarAlt } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./achievements.css";
import { Pagination, Navigation } from "swiper/modules";
import Slideshow from "./slideshow/Slideshow";
import { Data } from "./Data";

const Achievements = () => {
  return (
    <section className="achievement container section" id="achievements">
      <h2 className="section__title">Achievements</h2>
      <span className="section__subtitle"></span>

      <Swiper
        className="achievement__container"
        grabCursor={true}
        loop={true}
        spaceBetween={24}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          576: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination, Navigation]}
        // modules={[Navigation]}
      >
        {Data.map(({ id, media, title, description, award, date }) => (
          <SwiperSlide className="achievement__card" key={id}>
            <div className="achievement__img">
              <Slideshow media={media} />
            </div>

            <h3 className="achievement__name">{title}</h3>

            <div className="achievement__details">
              <div className="achievement__award">
                <FaAward /> {award}
              </div>
              <div className="achievement__date">
                <FaCalendarAlt /> {date}
              </div>
            </div>

            <p className="achievement__description">{description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Achievements;
