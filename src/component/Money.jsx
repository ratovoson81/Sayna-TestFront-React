import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";

export default function Money() {
  return (
    <div className="mt-8 flex justify-center space-x-4">
      <div className="w-64 h-44 bg-white rounded-lg flex flex-col justify-between shadow-lg">
        <div className="flex mt-3 ml-4">
          <FiArrowDownLeft style={{ color: "green" }} size={20} />
          <div className="text-sm self-center text-green-500 font-medium ml-2">
            Money in
          </div>
        </div>
        <div className="flex mt-3 mx-6 justify-between mb-16">
          <div className="font-semibold text-lg">+10.465</div>
          <div className="text-lg">USD</div>
        </div>
      </div>
      <div className="w-64 h-44 bg-white rounded-lg flex flex-col justify-between shadow-lg">
        <div className="flex mt-3 ml-4">
          <FiArrowUpRight style={{ color: "red" }} size={20} />
          <div className="text-sm self-center text-red-500 font-medium ml-2">
            Money out
          </div>
        </div>
        <div className="flex mt-3 mx-6 justify-between mb-16">
          <div className="font-semibold text-lg">-4.640</div>
          <div className="text-lg">USD</div>
        </div>
      </div>
    </div>
  );
}
