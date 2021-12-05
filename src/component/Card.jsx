import { useState } from "react";
import { Cards } from "../data/card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../css/card.css";
import { RiMastercardFill, RiVisaLine } from "react-icons/ri";

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

  function Icon({ type, index }) {
    if (type === "master") {
      if (choose === index) {
        return (
          <img
            src="https://firebasestorage.googleapis.com/v0/b/test-sayna-fe3c4.appspot.com/o/master-color.png?alt=media&token=1e3931be-af73-488b-b0e5-859f36fe906c"
            alt=""
            width={30}
          />
        );
      } else {
        return <RiMastercardFill size={30} />;
      }
    } else if (type === "visa") {
      if (choose === index) {
        return (
          <img
            src="https://firebasestorage.googleapis.com/v0/b/test-sayna-fe3c4.appspot.com/o/visa.png?alt=media&token=169a1449-f13e-446f-b261-e8d704e34e25"
            alt=""
            width={30}
          />
        );
      } else {
        return <RiVisaLine size={30} />;
      }
    }
  }

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
              className={`flex flex-col p-4 bg-white mx-3 h-44 rounded-lg justify-between relative cursor-pointer mb-8 mt-8 shadow-xl bg-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 ${
                choose === i && i % 2 === 0 && "background"
              } ${choose === i && "bg-gradient-to-tr from-black to-gray-900"}`}
              onClick={() => setChoose(i)}
            >
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-xl font-semibold flex">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/test-sayna-fe3c4.appspot.com/o/logo-klamma.png?alt=media&token=df912a99-1785-4168-a638-e2493405e25a"
                    alt=""
                    width={25}
                  />
                  <span
                    className={`text-sm self-center ${
                      choose === i && "text-white"
                    }`}
                  >
                    {card.name}
                  </span>
                </h1>
                <div>{card.lock && card.lock}</div>
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
                  <Icon type={card.type} index={i} />
                </div>
              </div>
              {choose === i && (
                <div className="absolute -bottom-6 left-1/2 bg-blue-900 w-2 h-2 rounded shadow-lg"></div>
              )}
            </div>
          );
        })}
      </Carousel>
    </>
  );
}
