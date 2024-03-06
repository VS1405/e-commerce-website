import { FaFacebookF } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="container mt-16 w-full h-full p-3 flex justify-center border-y-2">
      
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 hover:cursor-pointer ">
        <div className="w-[50px] h-[50px] bg-slate-300 rounded-full grid place-items-center hover:bg-slate-400">
        <FaFacebookF /> 
        </div>
        <div className="w-[50px] h-[50px] bg-slate-300 rounded-full grid place-items-center  hover:bg-slate-400">
          <p><TiSocialTwitter /> </p>
        </div>
        <div className="w-[50px] h-[50px] bg-slate-300 rounded-full grid place-items-center hover:bg-slate-400">
          <p><TiSocialYoutube /> </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
