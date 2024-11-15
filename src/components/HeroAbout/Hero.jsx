import heroImg from "../../assets/images/heroImg.jpg";
import call from "../../assets/images/call-alt.png";
import packages from "../../assets/images/package.png";
import model from "../../assets/images/medal.png";
import bag from "../../assets/images/bag.png";
import background from "../../assets/images/background.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Hero = () => {
  return (
    <div>
      <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 mx-10">
       
        <div className="container">
          <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src={heroImg}
                className="w-full object-cover"
                alt="Relume placeholder image "
              />

              <div className="absolute bg-slate-100 top-6 left-6 z-10 flex gap-4 justify-center items-center p-6 rounded-md">
                <div
                  className="radial-progress"
                  style={{ "--value": 60 }}
                  role="progressbar"
                >
                  60%
                </div>
                <p className="font-semibold">
                  Market <br />
                  Experiences
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              
              <Tabs>
                <div className="container px-6 py-10 mx-auto font-semibold">
                  <div className="flex items-start ">
                    <TabList className="border-b-2 border-red-900">
                      <Tab>About</Tab>
                      <Tab>Experience</Tab>
                      <Tab>Contact</Tab>
                    </TabList>
                  </div>

                  <TabPanel>
                    <div className="grid grid-cols-1  mt-8">
                      <div>
                        <h1 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl lg:text-4xl uppercase">
                          Exceptional culinary experience and delicious food
                        </h1>
                        <p className="md:text-md">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique. Duis cursus, mi quis viverra ornare, eros
                          dolor interdum nulla, ut commodo diam libero vitae
                          erat.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                          <button
                            className="bg-yellow-400 px-6 py-3 font-semibold"
                            title="Button"
                          >
                            About More
                          </button>
                          <button
                            className=" px-6 py-3 font-semibold flex gap-3"
                            title="Button"
                          >
                            <img src={call} alt="" />
                            +88 3426 739 485
                          </button>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="grid grid-cols-1 mt-8">
                      <div>
                        <h1 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl lg:text-4xl uppercase">
                          An accessible and easy tab component for ReactJS.
                        </h1>
                        <p className="md:text-md">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique. eros dolor interdum nulla, ut commodo diam
                          libero vitae erat.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                          <button
                            className="bg-yellow-400 px-6 py-3 font-semibold"
                            title="Button"
                          >
                            More
                          </button>
                          <button
                            className=" px-6 py-3 font-semibold flex gap-3"
                            title="Button"
                          >
                            <img src={call} alt="" />
                            +88 3426 739 485
                          </button>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="grid grid-cols-1  mt-8">
                      <div>
                        <h1 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl lg:text-4xl uppercase">
                          Exceptional culinary experience and delicious food
                        </h1>
                        <p className="md:text-md">
                          consectetur adipiscing elit. Suspendisse varius enim
                          in eros elementum tristique. Duis cursus, mi quis
                          viverra ornare, eros dolor interdum nulla, ut commodo
                          diam libero vitae erat.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                          <button
                            className="bg-yellow-400 px-6 py-3 font-semibold"
                            title="Button"
                          >
                            Experiance
                          </button>
                          <button
                            className=" px-6 py-3 font-semibold flex gap-3"
                            title="Button"
                          >
                            <img src={call} alt="" />
                            +88 3426 739 485
                          </button>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </div>
              </Tabs>

              <div className=" hidden md:block absolute -right-52 bottom-8">
              <img className="w-40" src={background} alt="" />
              </div>
            </div>
          </div>
        </div>


        <div className=" flex gap-16 justify-center items-center mt-12">
          <div className="flex justify-center items-center gap-2">
            <div className="bg-slate-200 p-4 rounded-full">
            <img src={packages} className="" alt="clock" />
            </div>
            <div>
              <h3 className="tracking-wide uppercase mt-3 font-bold text-xl">
                fast delivery
                
              </h3>
              <p>Within 30 minutes</p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            
            <div className="bg-slate-200 p-4 rounded-full">
            <img src={model} className="" alt="clock" />
            </div>
            <div>
              <h3 className="tracking-wide uppercase mt-3 font-bold text-xl">
                Absolute dining
                
              </h3>
              <p>Best buffet restaurant</p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
           
            <div className="bg-slate-200 p-4 rounded-full">
            <img src={bag} className="" alt="clock" />
            </div>
            <div>
              <h3 className="tracking-wide uppercase mt-3 font-bold text-xl">
              Pickup Delivery
              </h3>
              <p>Grab your food order</p>
            </div>
          </div>
        </div>

      
      </section>

    </div>
  );
};

export default Hero;
