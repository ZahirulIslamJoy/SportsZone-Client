import bgtest1 from "../../../../assets/images/bgtest1.jpg";
import bgtest4 from "../../../../assets/images/bgtest2.jpg";
import bgtest5 from "../../../../assets/images/bgtest55.jpg";
import bgtest6 from "../../../../assets/images/athletes-ball-basketball-1080882.jpg";
import { TbCricket } from "react-icons/tb";
import { BiFootball } from "react-icons/bi";
import { FaVolleyballBall } from "react-icons/fa";
import { TbGolf } from "react-icons/tb";
import { Link } from "react-router-dom";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Sliders = () => {
  return (

    <div>
      <AwesomeSlider>
        <div data-src={bgtest6}>
          <div className="absolute lg:bottom-60 right-10 lg:right-40 bottom-10">
            <h1 className=" text-xl   lg:text-4xl text-black">
              SUMMER CAMPS KICK OFF <span className="text-red-600">June 28TH!</span>
            </h1>
            <div className="flex gap-2 justify-center">
              <div className="flex items-center  justify-center">
                <TbCricket color="white" size={50}></TbCricket>
              </div>
              <div className="flex items-center  justify-center">
                <BiFootball color="black" size={50}></BiFootball>
              </div>
              <div className="flex items-center  justify-center">
                <FaVolleyballBall
                  className="animate-spin"
                  color="white"
                  size={40}
                ></FaVolleyballBall>
              </div>
              <div className="flex items-center  justify-center">
                <TbGolf color="black" size={50}></TbGolf>
              </div>
            </div>
            <div className="flex justify-center">
              <Link to="/register">
                <button className="hidden lg:block">Registration Open!</button>
              </Link>
            </div>
          </div>
        </div>
        <div data-src={bgtest4}>
          <div className="absolute lg:bottom-60 right-10 lg:right-40 bottom-10">
            <h1 className=" text-xl   lg:text-4xl text-black">
              SUMMER CAMPS KICK OFF <span className="text-red-600">June 28TH!</span>
            </h1>
            <div className="flex gap-2 justify-center">
              <div className="flex items-center  justify-center">
                <TbCricket color="white" size={50}></TbCricket>
              </div>
              <div className="flex items-center  justify-center">
                <BiFootball color="black" size={50}></BiFootball>
              </div>
              <div className="flex items-center  justify-center">
                <FaVolleyballBall
                  className="animate-spin"
                  color="white"
                  size={40}
                ></FaVolleyballBall>
              </div>
              <div className="flex items-center  justify-center">
                <TbGolf color="black" size={50}></TbGolf>
              </div>
            </div>
            <div className="flex justify-center">
              <Link to="/register">
                <button className="hidden lg:block">Registration Open!</button>
              </Link>
            </div>
          </div>
        </div>
        <div data-src={bgtest5}>
          <div className="absolute lg:bottom-60 right-10 lg:right-40 bottom-10">
            <h1 className=" text-xl   lg:text-4xl text-white">
              SUMMER CAMPS KICK <span className="text-red-600">June 28TH!</span>
            </h1>
            <div className="flex gap-2 justify-center">
              <div className="flex items-center  justify-center">
                <TbCricket color="white" size={50}></TbCricket>
              </div>
              <div className="flex items-center  justify-center">
                <BiFootball color="black" size={50}></BiFootball>
              </div>
              <div className="flex items-center  justify-center">
                <FaVolleyballBall
                  className="animate-spin"
                  color="white"
                  size={40}
                ></FaVolleyballBall>
              </div>
              <div className="flex items-center  justify-center">
                <TbGolf color="black" size={50}></TbGolf>
              </div>
            </div>
            <div className="flex justify-center">
              <Link to="/register">
                <button className="hidden lg:block">Registration Open!</button>
              </Link>
            </div>
          </div>
        </div>
        <div data-src={bgtest1}>
          <div className="absolute lg:bottom-60 right-10 lg:right-40 bottom-10">
            <h1 className=" text-xl   lg:text-4xl text-blue-600">
              SUMMER CAMPS KICK OFF <span className="text-red-600">June 28TH!</span>
            </h1>
            <div className="flex gap-2 justify-center">
              <div className="flex items-center  justify-center">
                <TbCricket color="white" size={50}></TbCricket>
              </div>
              <div className="flex items-center  justify-center">
                <BiFootball color="black" size={50}></BiFootball>
              </div>
              <div className="flex items-center  justify-center">
                <FaVolleyballBall
                  className="animate-spin"
                  color="white"
                  size={40}
                ></FaVolleyballBall>
              </div>
              <div className="flex items-center  justify-center">
                <TbGolf color="black" size={50}></TbGolf>
              </div>
            </div>
            <div className="flex justify-center">
              <Link to="/register">
                <button className="hidden lg:block">Registration Open!</button>
              </Link>
            </div>
          </div>
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Sliders;
