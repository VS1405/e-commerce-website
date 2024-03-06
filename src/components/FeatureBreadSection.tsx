
import FeatureProductFruitsCard from "./FeatureProductFruitsCard";
import BreadImg from "../accest/img/bread.jpg";
import ChocklateImg from "../accest/img/chocklate.jpeg";
import EggImg from "../accest/img/egg.jpeg";
// import FruitsImg from "../accest/img/fruits.jpeg";
import HoneyImg from "../accest/img/honey.jpeg";
// import IceCreamImg from "../accest/img/ice-cream.jpg";

const data = [
  { id: "2", img: ChocklateImg, name: "Chocklate", price: "$15.70" },
  { id: "4", img: HoneyImg, name: "Original Honey", price: "$15.70" },
  { id: "5", img: EggImg, name: "Egg", price: "$15.70" },
];
const FeatureBreadSection = () => {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-medium">Bread and Bakery</h3>
          <p className="text-gray-600 mt-2">
            By from fresh bread & bakery from online at the best price.
          </p>
        </div>

        <div className="space-x-8 mt-8 lg:mt-0">
          <button className="feature__btn">Eggs</button>
          <button className="text-gray-600 hover:text-accent ">
            Pizza
          </button>
          <button className="text-gray-600 hover:text-accent">
            Snacks
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
          <img
            className="lg:w-full h-full object-cover "
            src={BreadImg}
            alt="bread"
          />
        </div>
        {data.map((value) => {
          return (
            <FeatureProductFruitsCard
              key={value.id}
              img={value.img}
              name={value.name}
              price={value.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeatureBreadSection;
