import React, { useContext } from "react";
import Marquee from "react-fast-marquee";
import { ThemeContext } from "../../../../providers/ThemeProviders";

const Activities = () => {

    const {theme}=useContext(ThemeContext);
    console.log(theme)


  return (
    <div className={ `${theme?"bg-[#1D2A35] text-white":"bg-white text-black pt-8"}`
}>   
      <div className="w-[85%] mx-auto ">
      <h1 className="text-3xl mb-24 text-center">Upcoming Activities</h1>
        <Marquee>
          <div className="ml-8">
            <a className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img
                className="object-cover h-48 w-full rounded-t-lg  lg:h-96  md:w-48 md:rounded-none md:rounded-l-lg"
                src="https://th.bing.com/th/id/R.8bd377f7bcfe34f315a948fdee0a7b25?rik=sUzmApgybpeVng&riu=http%3a%2f%2fwww.corkcountycricketclub.com%2fwp-content%2fuploads%2f2015%2f06%2fWhatsApp-Image-2019-07-11-at-13.26.51.jpg&ehk=Em6jYboN2qLKNQB4LoMJDcc7OOMi1wYW%2bbAQujSPheQ%3d&risl=&pid=ImgRaw&r=0"
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Cricket Summer Camp 2023
                </h5>
                <p className="mb-3 hidden lg:block font-normal text-gray-700 dark:text-gray-400">
                  Cricket, often hailed as the gentleman's game, has captured the hearts of millions around the world. For aspiring young cricketers, the summer break offers a perfect opportunity to sharpen their skills and immerse themselves in the sport they love. Cricket summer camps provide an exciting and immersive experience, allowing youngsters to learn, practice, and play the game while fostering teamwork and sportsmanship.
                </p>
              </div>
            </a>
          </div>
          <div className="ml-8">
            <a className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img
                className="object-cover h-48 w-full rounded-t-lg  lg:h-96  md:w-48 md:rounded-none md:rounded-l-lg"
                src="https://cascade.madmimi.com/promotion_images/8396/9892/original/Soccer_Shots_2.jpg?1552325453"
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Football Summer Camp 2023
                </h5>
                <p className="mb-3 hidden lg:block font-normal text-gray-700 dark:text-gray-400">
                Football, often referred to as the beautiful game, captures the imagination of millions of people around the world. For young football enthusiasts, the summer break presents a fantastic opportunity to immerse themselves in their favorite sport and enhance their skills. Football summer camps provide an exhilarating and enriching experience, where participants can learn, practice, and play the game they love while fostering teamwork and sportsmanship.
                </p>
              </div>
            </a>
          </div>
          <div className="ml-8">
            <a className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img
                className="object-cover h-48 w-full rounded-t-lg  lg:h-96  md:w-48 md:rounded-none md:rounded-l-lg"
                src="https://farm2.staticflickr.com/1597/26443074551_68fd7913dc_o.jpg"
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Basket Ball Summer Camp 2023
                </h5>
                <p className="mb-3 hidden lg:block font-normal text-gray-700 dark:text-gray-400">
                Basketball, a fast-paced and exhilarating sport, captivates the hearts of countless enthusiasts around the world. For young basketball players, the summer break presents an excellent opportunity to enhance their skills and immerse themselves in the game they love. Basketball summer camps provide an exciting and transformative experience, where participants can learn, train, and compete while fostering teamwork and sportsmanship.
                </p>
              </div>
            </a>
          </div>
          <div className="ml-8">
            <a className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img
                className="object-cover h-48 w-full rounded-t-lg  lg:h-96  md:w-48 md:rounded-none md:rounded-l-lg"
                src="https://www.ulster.ac.uk/__data/assets/image/0019/268210/8086.jpg"
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Hockey Summer Camp 2023
                </h5>
                <p className="mb-3 hidden lg:block font-normal text-gray-700 dark:text-gray-400">
                Hockey, a fast-paced and intense sport, has gained popularity worldwide for its exciting gameplay and fierce competition. For young hockey players, the summer break offers an excellent opportunity to enhance their skills and immerse themselves in the sport they love. Hockey summer camps provide an exciting and transformative experience, allowing participants to learn, train, and compete while fostering teamwork and sportsmanship.
                </p>
              </div>
            </a>
          </div>
          <div className="ml-8">
            <a className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img
                className="object-cover h-48 w-full rounded-t-lg  lg:h-96  md:w-48 md:rounded-none md:rounded-l-lg"
                src="https://s.hdnux.com/photos/54/47/01/11694206/5/rawImage.jpg"
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                 VolleyBall  Summer Camp 2023
                </h5>
                <p className="mb-3 hidden lg:block font-normal text-gray-700 dark:text-gray-400">
                Volleyball, a dynamic and thrilling sport, has gained immense popularity around the world. For young volleyball players, the summer break provides a wonderful opportunity to enhance their skills and immerse themselves in the game they love. Volleyball summer camps offer an exciting and transformative experience, allowing participants to learn, practice, and compete while fostering teamwork and sportsmanship
                </p>
              </div>
            </a>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Activities;
