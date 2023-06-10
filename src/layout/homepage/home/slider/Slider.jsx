import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bgtest1 from "../../../../assets/images/bgtest1.jpg";
import bgtest4 from "../../../../assets/images/bgtest2.jpg";
import bgtest5 from "../../../../assets/images/bgtest55.jpg";
import bgtest6 from "../../../../assets/images/athletes-ball-basketball-1080882.jpg";
import { TbCricket } from "react-icons/tb";
import { BiFootball } from "react-icons/bi";
import { FaVolleyballBall } from "react-icons/fa";
import { TbGolf } from "react-icons/tb";
import { Link } from "react-router-dom";


const Slider = () => {
  return (
    <div className="">
      <Carousel interval={2000}  autoPlay={true} infiniteLoop={true}>
        <div>
          <img src={bgtest4} />
          <div className=" -mt-28  lg:-mt-96">
            <h1 className=" text-xl   lg:text-4xl text-black">
              SUMMER CAMPS KICK OFF June 28TH!
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
        <div>
          <img src={bgtest5} />
          <div className=" -mt-28  lg:-mt-96">
            <h1 className=" text-xl   lg:text-4xl text-white">
              SUMMER CAMPS KICK OFF June 28TH!
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
        <div>
          <img src={bgtest1} />
          <div className=" -mt-28  lg:-mt-96">
            <h1 className=" text-xl   lg:text-4xl text-black">
              SUMMER CAMPS KICK OFF June 28TH!
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
        <div>
          <img src={bgtest6} />
          <div className=" -mt-28  lg:-mt-96">
            <h1 className=" text-xl   lg:text-4xl text-black">
              SUMMER CAMPS KICK OFF June 28TH!
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
      </Carousel>
    </div>
  );
};

export default Slider;
