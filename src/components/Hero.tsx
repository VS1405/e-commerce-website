import { IoMdArrowForward } from "react-icons/io";
import chipsImg from '../accest/img/chips-img.webp';
import PizzaImg from '../accest/img/pizza-img.webp'
import strawberryImg from '../accest/img/Strawberry-img.webp'
const Hero = () => {
  return (
    <div className="container pt-8 w-full h-full ">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
        <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1] overflow-hidden">
          <img
            className="w-full sm:h-[75vh] object-cover rounded-lg"
            src={strawberryImg}
            alt="dry-fruits"
          />
          <div className="absolute md:overflow-clip md:ml-[70%] ml-6 top-[50%] -translate-y-[50%] sm:space-y-4 lg:block ml-[70%]">
            <p className="text-xl flex font-semibold md:text-xxl">100% Fresh Fruit's</p>
            <h3 className="text-2xl font-medium text-startingAt">
              Starting at ...
            </h3>
            <p className="font-serif text-2xl">
              <span className="text-red-600">10%</span> OFF
            </p>
            <div className="bg-accent inline-flex justify-center p-1 pr-2 pl-2 items-center rounded-full text-center hover:bg-accentDark cursor-pointer font-normal text-white">
              Show more <IoMdArrowForward />
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <img
            className="w-full h-[35vh] object-cover rounded-lg"
            src={chipsImg}
            alt="dry-fruits"
          />
          <div className="absolute text-white md:ml ml-6 top-[50%] -translate-y-[50%] sm:space-y-4 lg:block">
            <p className="text-xl flex font-semibold">100% Fresh Chip's</p>
            <h3 className="text-2xl font-medium text-startingAt">
              Starting at ...
            </h3>
            <p className="font-serif text-2xl">
              <span className="text-red-600">15%</span> OFF
            </p>
            <div className="bg-accent inline-flex justify-center p-1 pr-2 pl-2 items-center rounded-full text-center hover:bg-accentDark cursor-pointer font-normal text-white">
              Show more <IoMdArrowForward />
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <img
            className="w-full h-[35vh] object-cover rounded-lg"
            src={PizzaImg}
            alt="dry-fruits"
          />
          <div className="absolute text-white md:ml ml-6 top-[50%] -translate-y-[50%] sm:space-y-4 lg:block">
            <p className="text-xl flex font-semibold">100% Fresh Pizza</p>
            <h3 className="text-2xl text-startingAt font-medium">
              Starting at ...
            </h3>
            <p className=" font-serif text-2xl">
              <span className="text-red-400">20%</span> OFF
            </p>
            <div className="bg-accent inline-flex justify-center p-1 pr-2 pl-2 items-center rounded-full text-center hover:bg-accentDark cursor-pointer font-normal text-white">
              Show more <IoMdArrowForward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
