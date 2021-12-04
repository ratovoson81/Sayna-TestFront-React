import { useReducer } from "react";
import { TopNav } from "../data/nav";
import { BottomNav } from "../data/nav";
import Collapse from "@kunukn/react-collapse";
import Down from "./Down";
import "../css/nav.scss";
import logoKlamma from "../assets/logo-klamma.png";

const initialState = [false, false, false];
function reducer(state, { type, index }) {
  switch (type) {
    case "expand-all":
      return [true, true, true];
    case "collapse-all":
      return [false, false, false];
    case "toggle":
      state[index] = !state[index];
      return [...state];

    default:
      throw new Error();
  }
}

function Block({ isOpen, nav, onToggle, children }) {
  return (
    <div className="block mt-1">
      <button
        className="toggle flex px-2 py-3 rounded hover:bg-blue-100 hover:text-blue-900 justify-between w-11/12 m-auto"
        onClick={onToggle}
      >
        <div className="flex">
          {nav.icon}
          <div className="my-auto ml-3 text-sm text-gray-600">{nav.name}</div>
        </div>
        {nav.child && (
          <span className="self-center">
            <Down isOpen={isOpen} />
          </span>
        )}
      </button>
      <Collapse isOpen={isOpen}>{children}</Collapse>
    </div>
  );
}

export default function Nav() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="h-full flex flex-col justify-between pb-4 fixed w-1/6 ">
      <div className="mt-4">
        <div className="flex  m-3 ml-3.5">
          <img src={logoKlamma} alt="" width={30} />
          <div
            className="my-auto ml-2 font-bold text-xl"
            style={{ color: "#283747" }}
          >
            Klamma
          </div>
        </div>
        {TopNav.map((nav, i) => {
          return (
            <Block
              key={i}
              nav={nav}
              className="border"
              isOpen={state[i]}
              onToggle={() => dispatch({ type: "toggle", index: i })}
            >
              {nav.child &&
                nav.child.map((child, i) => {
                  return (
                    <div key={i} className="my-2 ml-12 text-sm text-gray-600">
                      {child.elem}
                    </div>
                  );
                })}
            </Block>
          );
        })}
      </div>
      <div>
        {BottomNav.map((nav, i) => {
          return (
            <div
              key={i}
              className="flex mx-4 px-2 py-3 rounded hover:bg-gray-200 mt-1"
            >
              {nav.icon}
              <div className="my-auto ml-3 text-sm text-gray-600">
                {nav.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
