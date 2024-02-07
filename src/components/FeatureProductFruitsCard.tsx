interface propsType {
  img: string;
  name: string;
  price: string;
}

import { IoIosStar } from "react-icons/io";
import { FaStarHalf } from "react-icons/fa";

const FeatureProductCard: React.FC<propsType> = ({img, name, price}) => {
  return (
    <div className="border border-gray-200 hover:border-gray-400 transition-transform hover:scale-105 rounded-lg relative flex items-center justify-center flex-col">
        <img  className="lg:w-[100%] h-[70%] sm:w-[50%] rounded-lg lg:pt-0" src={img} alt="name"/>
        <div className="space-y-2 p-4 relative ">
            <div className="flex flex-row"> 
            <IoIosStar color="yellow"/>
            <IoIosStar color="yellow" />
            <IoIosStar color="yellow" />
            <FaStarHalf color="yellow"/>
            </div>
            <h3 className="font-medium">{name}</h3>
            <h3 className="font-medium text-2xl text-red-600">{price}</h3>
        </div>
    </div>
  );
};

export default FeatureProductCard;
