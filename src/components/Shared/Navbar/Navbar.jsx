import Container from "../Container";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import avatarImg from "../../../assets/images/placeholder.jpg";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed w-full bg-gradient-to-r from-[#BD1F17] via-[#A51D13] to-[#8E1B0F] p-6  bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
            {/* Logo */}

            <div className="flex items-center gap-6">
              <Link className="flex items-center gap-3" to="/">
                <svg
                  width="47"
                  height="48"
                  viewBox="0 0 37 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M19.5868 0.5C20.2911 0.597145 20.9954 0.670003 21.6876 0.791434C25.9498 1.54431 29.5199 3.5722 32.3856 6.81441C34.9964 9.76518 36.5143 13.2381 36.9029 17.1603C37.3643 21.9326 36.1621 26.2798 33.2721 30.117C30.5156 33.7721 26.8848 36.14 22.3919 37.075C16.8546 38.2286 11.7788 37.0871 7.26157 33.6628C3.63079 30.9063 1.37217 27.2391 0.400725 22.7947C0.230722 22.0297 0.182149 21.2525 0.0728615 20.4754C0.0607184 20.3418 0.0242891 20.2204 0.012146 20.0868C0.012146 19.3582 0.012146 18.6418 0.012146 17.9132C0.0364322 17.6582 0.0728615 17.391 0.0971476 17.136C0.534299 13.1531 2.05219 9.64375 4.73581 6.66869C7.58944 3.51149 11.1109 1.53216 15.3124 0.791434C16.0046 0.670003 16.7089 0.597145 17.4132 0.5C18.1418 0.5 18.8582 0.5 19.5868 0.5ZM18.5061 1.87217C9.08303 1.86003 1.38432 9.5466 1.37217 18.9818C1.36003 28.4048 9.04661 36.1035 18.4818 36.1157C27.9048 36.1278 35.6035 28.4412 35.6157 19.0061C35.6278 9.58303 27.9413 1.88431 18.5061 1.87217Z"
                      fill="#FEBF00"
                    />
                    <path
                      d="M24.5655 9.8987C24.1769 9.8987 23.8491 9.8987 23.4969 9.8987C23.4969 13.3838 23.4969 16.8567 23.4969 20.3539C23.169 20.3539 22.8655 20.3539 22.5497 20.3539C22.5497 16.8688 22.5497 13.4081 22.5497 9.91084C22.2097 9.91084 21.9062 9.91084 21.554 9.91084C21.469 10.6516 21.3597 11.3923 21.2869 12.1452C21.0683 14.6588 20.8497 17.1846 20.6676 19.6982C20.619 20.3782 20.6797 21.0703 20.7526 21.7504C20.7768 22.0054 20.8983 22.2847 21.0561 22.5032C21.7119 23.414 22.574 24.0333 23.6548 24.3368C23.8976 24.4097 23.9341 24.519 23.9219 24.7497C23.7762 27.409 23.6426 30.0684 23.509 32.7156C23.4969 32.9706 23.4726 33.2256 23.4848 33.4684C23.4848 33.6749 23.424 33.7842 23.2055 33.8449C20.5218 34.6706 17.8261 34.8163 15.0817 34.1849C14.8632 34.1363 14.766 34.0634 14.7539 33.8206C14.596 30.5541 14.426 27.2755 14.256 24.009C14.2439 23.8875 14.256 23.7661 14.256 23.6325C14.4382 23.5597 14.6082 23.4868 14.7903 23.4261C16.211 23.0132 17.1461 22.0418 17.7775 20.7668C18.7004 18.8724 19.004 16.8688 18.4939 14.8045C18.0811 13.1166 17.1703 11.7445 15.7496 10.7366C13.9889 9.48584 12.0095 9.60727 10.3216 11.1009C8.62161 12.5945 7.78373 14.4888 7.82016 16.7474C7.84445 18.3017 8.16017 19.771 8.96161 21.1311C9.65377 22.3089 10.6009 23.1347 11.9245 23.499C12.2281 23.584 12.301 23.7175 12.2767 24.0333C12.131 26.6319 11.9974 29.2305 11.8638 31.8291C11.8395 32.2177 11.8152 32.6184 11.791 33.0191C6.80014 30.797 2.23434 24.8954 2.98721 17.4153C3.74008 9.93513 9.73877 4.17931 16.9639 3.48715C24.8205 2.72214 31.6813 7.83438 33.5757 14.9988C35.4943 22.2361 32.0092 29.2305 26.3384 32.4606C26.3141 32.0113 26.2777 31.5984 26.2534 31.1734C26.1441 29.0484 26.047 26.9112 25.9255 24.7861C25.9134 24.5433 25.9619 24.434 26.217 24.3611C27.2248 24.0818 28.0263 23.4868 28.6941 22.6975C29.0706 22.2482 29.192 21.7261 29.1799 21.1918C29.1556 19.6739 29.1434 18.156 29.022 16.6503C28.8399 14.4645 28.5727 12.2909 28.3299 10.1173C28.3177 10.0566 28.3177 10.008 28.3056 9.93513C28.0627 9.93513 27.8441 9.93513 27.577 9.93513C27.577 13.4081 27.577 16.881 27.577 20.3782C27.237 20.3782 26.9455 20.3782 26.6055 20.3782C26.6055 16.9053 26.6055 13.4323 26.6055 9.93513C26.2291 9.93513 25.9012 9.93513 25.5248 9.93513C25.5248 13.3959 25.5248 16.8688 25.5248 20.3782C25.1969 20.3782 24.9055 20.3782 24.5655 20.3782C24.5655 16.881 24.5655 13.4081 24.5655 9.8987Z"
                      fill="#FEBF00"
                    />
                    <path
                      d="M8.80377 17.816C8.88877 16.5531 9.10735 15.4845 9.72665 14.5495C9.79951 14.4402 9.95737 14.3795 10.0667 14.3066C10.0909 14.4402 10.1638 14.5981 10.1274 14.7195C9.42307 17.391 9.98165 19.771 11.6574 21.9325C11.7303 22.0175 11.7303 22.1511 11.7667 22.2604C11.6453 22.2482 11.4874 22.2968 11.4024 22.2239C10.9652 21.9082 10.4917 21.6168 10.1517 21.2161C9.2895 20.2082 8.88877 18.9939 8.80377 17.816Z"
                      fill="#FEBF00"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_54">
                      <rect
                        width="36.9879"
                        height="37"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <h3 className="font-bold text-2xl text-slate-100">
                  Restaurant
                </h3>
              </Link>

              <div className="hidden md:block text-slate-100">
                {/* {!user && ( */}
                <Link
                  // onClick={() => setIsModalOpen(true)}
                  // disabled={!user}
                  to="/"
                  className="cursor-pointer hover:bg-red-900 py-3 px-4 text-sm font-normal rounded-full  transition"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="cursor-pointer hover:bg-red-900 py-3 px-4 text-sm font-normal  rounded-full  transition"
                >
                  About
                </Link>
                <Link
                  to="/portfolio"
                  className="cursor-pointer hover:bg-red-900 py-3 px-4 text-sm font-normal  rounded-full  transition"
                >
                  Portfolio
                </Link>
                <Link
                  to="/clients"
                  className="cursor-pointer hover:bg-red-900 py-3 px-4 text-sm font-normal rounded-full  transition"
                >
                  Clients
                </Link>
                <Link
                  to="/blog"
                  className="cursor-pointer hover:bg-red-900 py-3 px-4 text-sm font-normal  rounded-full  transition"
                >
                  Blog
                </Link>
                <Link
                  to="/contact"
                  className="cursor-pointer hover:bg-red-900 py-3 px-4 text-sm font-normal rounded-full  transition"
                >
                  Contact
                </Link>

                {/* )} */}
              </div>
            </div>

            {/* Dropdown Menu */}
            <div className="relative">
              <div className="flex flex-row items-center gap-3">
                {/* Become A Host btn */}

                <div className="hidden md:block text-slate-900">
                  {/* {!user && ( */}
                  <Link className=" cursor-pointer bg-[#FEBF00] hover:text-slate-100 hover:bg-red-900 py-3 px-4 text-sm font-semibold transition">
                    BOOK A TABLE
                  </Link>

                  {/* )} */}
                </div>

                {/* Modal */}
                {/* <HostModal
                  isOpen={isModalOpen}
                  closeModal={closeModal}
                  modalHandler={modalHandler}
                ></HostModal> */}

                {/* Dropdown btn */}
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-4 md:py-1 md:px-2 border-[1px] border-yellow-400 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                >
                  <AiOutlineMenu className="text-white" />
                  <div className="hidden md:block">
                    {/* Avatar */}
                    <img
                      className="rounded-full"
                      referrerPolicy="no-referrer"
                      src={user && user.photoURL ? user.photoURL : avatarImg}
                      alt="profile"
                      height="30"
                      width="30"
                    />
                  </div>
                </div>
              </div>
              {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
                  <div className="flex flex-col cursor-pointer">
                    <Link
                      to="/"
                      className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                    >
                      Home
                    </Link>

                    <Link
                      to="/about"
                      className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                    >
                      About
                    </Link>
                    <Link
                      to="/portfolio"
                      className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                    >
                      Portfolio
                    </Link>
                    <Link
                      to="/clients"
                      className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                    >
                      Clients
                    </Link>
                    <Link
                      to="/blog"
                      className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                    >
                      Blog
                    </Link>
                    <Link
                      to="/contact"
                      className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                    >
                      Contact
                    </Link>

                    {user ? (
                      <>
                        <Link
                          to="/dashboard"
                          className="block px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          Dashboard
                        </Link>
                        <div
                          onClick={logOut}
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                        >
                          Logout
                        </div>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          Login
                        </Link>
                        <Link
                          to="/signup"
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;