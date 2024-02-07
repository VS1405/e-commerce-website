import { IoMdArrowForward } from "react-icons/io";
const Hero = () => {
  return (
    <div className="container pt-8 w-full h-full">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
        <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
          <img
            className="w-full sm:h-[75vh] object-cover rounded-lg"
            src="https://i0.wp.com/www.theweddingvowsg.com/wp-content/uploads/2021/02/Best-Fruit-Delivery-and-Subscription-Singapore-Amazon-Fresh.jpg?fit=1200%2C628&ssl=1"
            alt="dry-fruits"
          />
          <div className="absolute  md:ml-[70%] ml-6 top-[50%] -translate-y-[50%] sm:space-y-4 lg:block ml-[70%]">
            <p className="text-xl flex font-semibold">100% Fresh Fruit's</p>
            <h3 className="text-2xl font-medium text-startingAt">Starting at ...</h3>
            <p className="text-black font-serif text-2xl">$10.30</p>
            <div className="bg-accent inline-flex justify-center p-1 pr-2 pl-2 items-center rounded-full text-center hover:bg-accentDark cursor-pointer font-normal text-white">
              Show more <IoMdArrowForward />
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full h-[35vh] object-cover rounded-lg"
            src="https://opensecret.in/cdn/shop/products/Supergrain-Chips-Chilli-Pizza_USPs-1_d1362545-f316-4d01-9a12-55960aab08b2.jpg?v=1672759093"
            alt="dry-fruits"
          />
          <div className="absolute text-white md:ml ml-6 top-[50%] -translate-y-[50%] sm:space-y-4 lg:block">
            <p className="text-xl flex font-semibold">100% Fresh Fruit's</p>
            <h3 className="text-2xl font-medium text-startingAt">Starting at ...</h3>
            <p className="font-serif text-2xl"><span className="text-red-600">15%</span> OFF</p>
            <div className="bg-accent inline-flex justify-center p-1 pr-2 pl-2 items-center rounded-full text-center hover:bg-accentDark cursor-pointer font-normal text-white">
              Show more <IoMdArrowForward />
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full h-[35vh] object-cover rounded-lg"
            src="https://just-eat-prod-sg-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_1200,h_630,d_au:cuisines:pizza-8.jpg/v1/au/restaurants/11025968.jpg"
            alt="dry-fruits"
          />
          <div className="absolute text-white md:ml ml-6 top-[50%] -translate-y-[50%] sm:space-y-4 lg:block">
            <p className="text-xl flex font-semibold">100% Fresh </p>
            <h3 className="text-2xl text-startingAt font-medium">Starting at ...</h3>
            <p className=" font-serif text-2xl"><span className="text-red-400">20%</span> OFF</p>
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
