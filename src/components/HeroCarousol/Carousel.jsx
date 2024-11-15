// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./style.css";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Slide from "./Slide";
import kfc from "../../assets/images/kfc.jpg";
import pizza from "../../assets/images/pizza.png";
import burger from "../../assets/images/burger.jpg";
import chips from "../../assets/images/chips.jpg";
import background from "../../assets/images/background.png";

export default function Carousel() {
  return (
    <div className="bg-[#FBF7F2] p-4 pt-16 md:pt-32 relative">
      <div className="hidden md:block absolute bottom-36 -left-48 z-20 ">
        <img className="w-72" src={background} alt="" />
      </div>
      <div className="md:mx-32 pb-10 ">
        <div className=" absolute">
          <p className="font-bold text-red-600">Crispy, Every Bite Taste</p>
          <h2 className="font-bold text-3xl">POPULAR FOOD ITEMS</h2>
        </div>

        <Swiper
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          onAutoplay={true}
          //slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <Slide
              image={kfc}
              text="vegetables burger"
              des="Barbecue Italian cuisine pizza"
            ></Slide>
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              image={pizza}
              text="Spacial Pizza "
              des="Barbecue Italian cuisine pizza"
            ></Slide>
          </SwiperSlide>

          <SwiperSlide>
            <Slide
              image={chips}
              text="Spacial French fries "
              des="Barbecue Italian cuisine pizza"
            ></Slide>
          </SwiperSlide>

          <SwiperSlide>
            <Slide
              image={kfc}
              text="vegetables burger"
              des="Barbecue Italian cuisine pizza"
            ></Slide>
          </SwiperSlide>

          <SwiperSlide>
            <Slide
              image={burger}
              text="Cuisine Chicken"
              des="Barbecue Italian cuisine pizza"
            ></Slide>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
