import fruitImg from "../accest/img/fruits.jpeg";
import FeatureProductFruitsCard from "./FeatureProductFruitsCard";
// import BreadImg from "../accest/img/bread.jpg";
import ChocklateImg from "../accest/img/chocklate.jpeg";
// import EggImg from "../accest/img/egg.jpeg";
import FruitsImg from "../accest/img/fruits.jpeg";
import KiwiFruits from '../accest/img/KiwiFruits.jpg'
import BlackBerry from '../accest/img/BlackBerryfruits.jpeg'
// import orangeFruits from '../accest/img/OrangeFruits.jpg'

const data = [
  { id: "1", img: FruitsImg, name: "Fresh Fruits", price: "$10" },
  { id: "2", img: ChocklateImg, name: "Chocklate", price: "$15.70" },
  { id: "4", img: KiwiFruits, name: "Original Honey", price: "$15.70" },
  { id: "6", img: BlackBerry, name: "Fresh Ice Cream", price: "$15.70" },
  
];
const FeatureFruitsSection = () => {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-medium">Fruits and Vegetables</h3>
          <p className="text-gray-600 mt-2">
            By from fresh fruits & vegetables from online at the best price.
          </p>
        </div>

        <div className="space-x-8 mt-8 lg:mt-0">
          <button className="feature__btn">Fruits</button>
          <button className="text-gray-600 hover:text-accent ">
            Vegetables
          </button>
          <button className="text-gray-600 hover:text-accent">
            Bread & Beckery
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
          <img
            className="w-full h-full object-cover"
            src={fruitImg}
            alt="banner"
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

export default FeatureFruitsSection;
