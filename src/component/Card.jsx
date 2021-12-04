import { useState } from "react";
import logo from "../assets/logo.svg";
import { Cards } from "../data/card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
        containerClass=""
        itemClass="carousel-item-padding-40-px"
      >
        {Cards.map((card, i) => {
          return (
            <div
              key={i}
              className="flex flex-col p-4 bg-white w-96 rounded-lg justify-between h-48 relative cursor-pointer mb-8 shadow-lg"
              onClick={() => setChoose(i)}
            >
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-xl font-semibold flex">
                  <img src={logo} alt="" width={40} />
                  <span className="text-sm self-center">{card.name}</span>
                </h1>
                <div>{card.lock && <img src={logo} alt="" width={40} />}</div>
              </div>
              <div className="w-full flex-none text-gray-800 mt-2 font-semibold">
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
        {Cards.map((card, i) => {
          return (
            <div
              key={i}
              className="flex flex-col p-4 bg-white w-96 rounded-lg justify-between h-40 relative cursor-pointer"
              onClick={() => setChoose(i)}
            >
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-xl font-semibold flex">
                  <img src={logo} alt="" width={40} />
                  <span className="text-sm self-center">{card.name}</span>
                </h1>
                <div>{card.lock && <img src={logo} alt="" width={40} />}</div>
              </div>
              <div className="w-full flex-none text-gray-800 mt-2 font-semibold">
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
                <span className="absolute top-44 left-1/2">0</span>
              )}
            </div>
          );
        })}
      </Carousel>
    </>
  );
}
