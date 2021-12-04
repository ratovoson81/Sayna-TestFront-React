import { AiOutlinePlus, AiOutlineBell } from "react-icons/ai";

const Title = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex">
        <div className="font-bold m-auto text-2xl">Your Cards</div>
        <button className="ml-4 bg-gray-200 pl-4 py-1 rounded text-xs flex items-center">
          New card
          <span className="self-center px-2">
            <AiOutlinePlus />
          </span>
        </button>
      </div>
      <span className="bg-white p-2 rounded-lg shadow-lg relative">
        <AiOutlineBell size={25} />
        <span className="absolute bottom-2 right-2.5 text-xs h-2 w-2 leading-none ring-2 ring-gray-50 transform bg-red-400 rounded-full"></span>
      </span>
    </div>
  );
};

export default Title;
