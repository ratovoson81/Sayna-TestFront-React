import { useState } from "react";
import logo from "../assets/logo.svg";
import { Cards } from "../data/card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../css/card.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export default function Card() {
  const [choose, setChoose] = useState(0);

  return (
    <>
      <Carousel
        responsive={responsive}
        containerClass="space-x-4"
        itemClass="carousel-item-padding-40-px"
      >
        {Cards.map((card, i) => {
          return (
            <div
              key={i}
              className={`flex flex-col p-4 bg-white mx-3 h-48 rounded-lg justify-between relative cursor-pointer mb-8 mt-8 shadow-md bg-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 ${
                choose === i && "background"
              }`}
              onClick={() => setChoose(i)}
            >
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-xl font-semibold flex">
                  <img src={logo} alt="" width={40} />
                  <span
                    className={`text-sm self-center ${
                      choose === i && "text-white"
                    }`}
                  >
                    {card.name}
                  </span>
                </h1>
                <div>{card.lock && <img src={logo} alt="" width={40} />}</div>
              </div>
              <div
                className={`w-full flex-none mt-2 font-semibold ${
                  choose === i ? "text-white" : "text-gray-800"
                }`}
              >
                {card.price}
              </div>
              <div className="flex items-baseline mt-4">
                <div>
                  <div className="space-x-2 flex text-sm text-gray-400">
                    {card.numero}
                  </div>
                  <div className="space-x-2 flex text-sm text-gray-400">
                    {card.date}
                  </div>
                </div>

                <div className="ml-auto mt-auto">
                  <img src={logo} alt="" width={40} />
                </div>
              </div>
              {choose === i && (
                <div className="absolute -bottom-8 left-1/2">0</div>
              )}
            </div>
          );
        })}
      </Carousel>
    </>
  );
}
