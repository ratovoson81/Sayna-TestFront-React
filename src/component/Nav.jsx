import { TopNav } from "../data/nav";
import { BottomNav } from "../data/nav";
import logo from "../assets/logo.svg";

export default function Nav() {
  return (
    <div className="border h-full flex flex-col justify-between pb-4">
      <div>
        <div className="flex border m-3">
          <img src={logo} alt="" width={46} />
          <div className="my-auto font-bold">Klamma</div>
        </div>
        {TopNav.map((nav, i) => {
          return (
            <div
              key={i}
              className="flex mx-4 px-2 py-2 rounded hover:bg-gray-200"
            >
              <img src={nav.icon} alt="" width={25} />
              <div className="my-auto ml-2 text-sm">{nav.name}</div>
            </div>
          );
        })}
      </div>
      <div>
        {BottomNav.map((nav, i) => {
          return (
            <div
              key={i}
              className="flex mx-4 px-2 py-2 rounded hover:bg-gray-200"
            >
              <img src={nav.icon} alt="" width={25} />
              <div className="my-auto ml-2 text-sm">{nav.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
