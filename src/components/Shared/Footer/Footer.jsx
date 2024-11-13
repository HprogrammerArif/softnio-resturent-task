import footerImg from "../../../assets/images/footer-img.jpg";
import clockImg from "../../../assets/images/clock.png";
import call from "../../../assets/images/call-alt.png";
import mail from "../../../assets/images/mail.png";
import location from "../../../assets/images/map-pin.png";

import f from "../../../assets/images/facebook-circle.png";
import x from "../../../assets/images/twitter-round-new-alt.png";
import i from "../../../assets/images/instagram-round.png";
import l from "../../../assets/images/linkedin-round.png";

const Footer = () => {
  return (
    <>
      <footer
        className="relative px-4 py-6  bg-cover bg-center text-slate-50"
        style={{ backgroundImage: `url(${footerImg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Footer content */}
        <div className="relative container py-10 mx-auto space-y-8 lg:space-y-0">
          <div className="text-center mb-16">

            <span className="self-center text-4xl font-bold uppercase">
              We are ready to give you the best dining experiences
            </span>
          </div>

          <div className="grid md:grid-cols-4 gap-x-3 gap-y-8 text-sm sm:grid-cols-1 text-center px-4">
            <div className="text-center flex flex-col justify-center items-center">
              <img src={clockImg} className="" alt="clock" />
              <h3 className="tracking-wide uppercase my-3 font-bold text-xl">
                Opening hours
              </h3>
              <p>Monday - Sunday</p>
              <p>9:00 AM to 11:30 PM</p>
            </div>

            <div className="text-center flex flex-col justify-center items-center">
              <img src={call} className="" alt="clock" />
              <h3 className="tracking-wide uppercase my-3 font-bold text-xl">
                LETS TALK
								
              </h3>
              <p>Phone: 1-800-222-4545</p>
              <p>Fax: 1-800-222-4545</p>
            </div>
            
						<div className="text-center flex flex-col justify-center items-center">
              <img src={mail} className="" alt="clock" />
              <h3 className="tracking-wide uppercase my-3 font-bold text-xl">
                BOOK A TABLE


              </h3>
              <p>Email: demo@website.com</p>
              <p>Support: support@website.com</p>
            </div>

            <div className="text-center flex flex-col justify-center items-center">
              <img src={location} className="" alt="clock" />
              <h3 className="tracking-wide uppercase my-3 font-bold text-xl">
               Our Address
							
              </h3>
              <p>123 Stree New York City ,</p>
              <p>United States Of America.</p>
            </div>
          </div>

        </div>

        <div className="relative p-4 md:py-6 text-md text-center">
					
					<div className="flex gap-4 justify-center items-center mt-16 mb-8">
					<img src={f} className="border rounded-full p-2" alt="clock" />
					<img src={x} className="border rounded-full p-2" alt="clock" />
					<img src={i} className="border rounded-full p-2" alt="clock" />
					<img src={l} className="border rounded-full p-2" alt="clock" />
					</div>
					© 2023 All Rights Reserved 
        </div>

      </footer>
    </>
  );
};

export default Footer;
