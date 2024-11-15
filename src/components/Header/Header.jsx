import headerImg from "../../assets/images/headerImg.jpg";
import offer from "../../assets/images/Offer.png";
import star from "../../assets/images/Vector.png";

const Header = () => {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-r from-[#BD1F17] via-[#A51D13] to-[#8E1B0F] ">
      <div className="mx-12 ">
        <div className="grid grid-cols-1  items-center gap-12 md:grid-cols-2 md:gap-12">
          <div className="">
            <h1 className="mb-5 p-2 text-3xl font-bold md:mb-6 md:text-6xl lg:text-7xl text-slate-50 uppercase absolute bg-gradient-to-r from-[#BD1F17] via-[#A51D13] to-[#8E1B0F]  opacity-70 z-40 bottom-20">
              Taste the authentic <br />
              Saudi cuisine
            </h1>

            <div className="mt-36">
              <p className="md:text-xl text-slate-50">
                Among the best Saudi chefs in the world, serving you something
                beyond flavor.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <button className="bg-yellow-400 px-3 py-2 font-semibold">Explore Menu</button>
              </div>
            </div>
          </div>

          <div className="relative flex">

          <div className="absolute bottom-auto -top-8 left-auto -right-12  ">
              <img
                src={star}
                className="aspect-square size-full object-cover"
                alt="Relume placeholder image 3"
              />
            </div>

            <div className=" w-[750px] h-[600px]">
              <img
                src={headerImg}
                className="aspect-[2/3] size-full object-cover"
                alt="Relume placeholder image 2"
              />
            </div>
            <div className="absolute -bottom-2 left-auto -right-12  bg-yellow-400 w-32 rounded-full">
              <img
                src={offer}
                className="aspect-square size-full object-cover"
                alt="Relume placeholder image 3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
