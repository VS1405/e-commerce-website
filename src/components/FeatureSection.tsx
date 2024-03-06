import FeatureCard from "./FeatureCard";
import { LiaGiftSolid } from "react-icons/lia";
import { FiPhoneCall } from "react-icons/fi";
import { CiDeliveryTruck } from "react-icons/ci";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";

const data = [
  { id: "1", icon: <CiDeliveryTruck />, title: "Transport" },
  { id: "2", icon: <FiPhoneCall />, title: "Phone" },
  { id: "3", icon: <LiaGiftSolid />, title: "Gift" },
  { id: "4", icon: <LiaMoneyBillWaveSolid />, title: "Money" },
];

const FeatureSection = () => {
  return (
    <div className="container">
      <div className="w-full h-full grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {data.map((ele) => (
          <FeatureCard key={ele.id} title={ele.title} icon={ele.icon}  />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
