// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Slide from "./Slide";
import tomato from "../../assets/images/tomato.png";
import tree from "../../assets/images/tree.png";

export default function CarouselTesto() {
  return (
    <div className=" p-4 relative overflow-x-hidden mt-6 md:mt-12">
      
      <div className="hidden md:block absolute bottom-52 -left-44 z-20 ">
        <img className="w-60" src={tomato} alt="" />
      </div>
      
      <div className="hidden md:block absolute bottom-32 -right-28 rotate-45">
        <img className="w-60" src={tree} alt="" />
      </div>


      <div className="md:mx-28 pb-10 ">
        <div className=" absolute ">
          <p className="font-bold text-red-600">Crispy, Every Bite Taste</p>
          <h2 className="font-bold text-3xl uppercase ">
            What Some of my Customers Say
          </h2>
        </div>

        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          onAutoplay={true}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Slide
              video={"https://www.youtube.com/embed/YIuaLweb4pQ?si=6DslFmwYWIPC_Od_"}
              text="vegetables burger"
              des="Barbecue Italian cuisine pizza"
            ></Slide>
          </SwiperSlide>

          <SwiperSlide>
            <Slide
              video={"https://www.youtube.com/embed/Du16-GsdBZg?si=vDpBQHJV8yByGFZz"}
              text="Spacial Pizza "
              des="Barbecue Italian cuisine pizza"
            ></Slide>
          </SwiperSlide>

          <SwiperSlide>
            <Slide
              video={"https://www.youtube.com/embed/-pPq_JF4zJo?si=uBqcC7OT_Ax-LcRK" }
              text="Spacial French fries "
              des="Barbecue Italian cuisine pizza"
            ></Slide>
          </SwiperSlide>

          <SwiperSlide>
            <Slide
              video={"https://www.youtube.com/embed/xt6IA_HLr0g?si=LyA9Pmf9cBwGB7Ns"}
              text="vegetables burger"
              des="Barbecue Italian cuisine pizza"
            ></Slide>
          </SwiperSlide>

         
        </Swiper>
      </div>
    </div>
  );
}
