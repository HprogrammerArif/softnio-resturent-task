import { Link } from "react-router-dom";

const Slide = ({ image, text, des }) => {
  return (
    <div className="w-full mt-24 border bg-center object-cover bg-cover h-[28rem] text-stone-900">
      <div className="text-center">
        <img src={image} className="h-[80%]" alt="" />
        <h1 className="text-2xl uppercase mb-2 font-bold text-stone-900 lg:text-4xl">
          {text}
        </h1>
        <p className=" text-stone-900 text-lg mb-3">{des}</p>
        <br />
      </div>
    </div>
  );
};

export default Slide;
