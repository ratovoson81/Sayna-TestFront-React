import donut from "../assets/donut.png";
import donut0 from "../assets/donut0.png";

export default function Chart() {
  return (
    <div className="flex mt-4 space-x-16 ml-12">
      <div className="flex justify-center">
        <div className="flex">
          <div className="m-auto">
            <img src={donut0} alt="" width={60} />
          </div>
          <div className="ml-4 space-y-1 m-auto">
            <div className="font-bold text-sm">Credit Limit</div>
            <div>
              <span className="text-indigo-900 font-extrabold text-sm ">
                1500
              </span>
              <span className="text-gray-400 text-xs font-semibold">
                / 2000 USD
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex">
          <div className="m-auto">
            <img src={donut} alt="" width={60} className="m-auto" />
          </div>
          <div className="ml-4 space-y-1 m-auto">
            <div className="font-bold text-sm">Online Limit</div>
            <div>
              <span className="text-indigo-900 font-extrabold  text-sm">
                1324
              </span>
              <span className="text-gray-400 text-xs font-semibold">
                / 1500 USD
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
