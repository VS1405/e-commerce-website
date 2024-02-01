import { CiSearch } from "react-icons/ci";
import { AiOutlineUser, AiOutlineShoppingCart  } from "react-icons/ai";
import CartShopBadge from "./CartShopBadge";

const Navbar = () => {
  return (
    <div className="container hidden lg:block">
      <div className="flex justify-between items-center pt-8">
        <h1 className="text-4xl font-medium">E-commerce</h1>
        <div className="relative w-full max-w-[500px]">
          <input
            className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
            type="text"
            placeholder="Search here..."
          />
          <CiSearch className="absolute top-0 right-0 mt-4 mr-5 text-gray-500" size='20px'/>
        </div>
        <div className="flex gap-4">
          <div className="icons__wrapper">
            <AiOutlineUser />
          </div>
          <div className="icons__wrapper relative">
            <AiOutlineShoppingCart />
            <CartShopBadge size="w-[25px] h-[25px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
