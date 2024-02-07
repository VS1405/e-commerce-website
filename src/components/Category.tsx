import BreadImg from "../accest/img/bread.jpg";
import ChocklateImg from "../accest/img/chocklate.jpeg";
import EggImg from "../accest/img/egg.jpeg";
import FruitsImg from "../accest/img/fruits.jpeg";
import HoneyImg from "../accest/img/honey.jpeg";
import IceCreamImg from "../accest/img/ice-cream.jpg";
import CategoryCart from "./CategoryCart";

const data = [
    { id: '1', img: FruitsImg, name: "Fresh Fruits", count: "$10" },
    { id: '3', img: BreadImg, name: "Fresh Bread", count: "$15.70" },
    { id: '2', img: ChocklateImg, name: "Chocklate" , count: "$15.70"},
    { id: '4', img: HoneyImg, name: "Original Honey", count: "$15.70" },
    { id: '2', img: ChocklateImg, name: "Chocklate" , count: "$15.70"},
    { id: '4', img: HoneyImg, name: "Original Honey", count: "$15.70" },
    { id: '5', img: EggImg, name: "Egg", count: "$15.70" },
    { id: '6', img: IceCreamImg, name: "Fresh Ice Cream", count: "$15.70" }
];
const Category = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map(el => (
            <CategoryCart key={el.id} img={el.img} name={el.name} count={el.count} />
        ))}
      </div>
    </div>
  );
};

export default Category;
