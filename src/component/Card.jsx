import { useState } from "react";
import logo from "../assets/logo.svg";
import { Cards } from "../data/card";

export default function Card() {
  const [choose, setChoose] = useState(0);

  return (
    <>
      {Cards.map((card, i) => {
        return (
          <div
            key={i}
            className="flex flex-col p-4 bg-white w-1/4 rounded-lg justify-between h-40 relative cursor-pointer"
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
    </>
  );
}
