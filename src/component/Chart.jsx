import donut from "../assets/donut.png";

export default function Chart() {
  return (
    <div className="flex mt-8 space-x-16 ml-12">
      <div className="flex justify-center">
        <div className="flex">
          <div className="m-auto">
            <img src={donut} alt="" width={70} />
          </div>
          <div className="ml-4 space-y-1 m-auto">
            <div className="font-bold">Credit Limit</div>
            <div>
              <span className="text-indigo-900 font-extrabold ">1500</span>
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
            <img src={donut} alt="" width={70} className="m-auto" />
          </div>
          <div className="ml-4 space-y-1 m-auto">
            <div className="font-bold">Online Limit</div>
            <div>
              <span className="text-indigo-900 font-extrabold ">1324</span>
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
