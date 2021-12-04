export default function Payement() {
  return (
    <div className="mt-8 px-8">
      <div className="flex justify-between">
        <div className="font-bold">Int. Payments</div>
        <div className="text-sm text-gray-500 font-medium">
          the last 30 days
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div className="border-l-2 w-36 h-28 flex flex-col justify-center text-center">
          <div className="text-center font-bold">8</div>
          <div className="mt-2 text-xs text-gray-500">Awaiting</div>
        </div>
        <div className="border-l-2 w-36 h-28 flex flex-col justify-center text-center relative">
          <span className="absolute top-0 right-2 h-6 bg-red-500 w-6 rounded-full text-white">
            !
          </span>
          <div className="text-center font-bold">5</div>
          <div className="mt-2 text-xs text-gray-500">In progress</div>
        </div>
        <div className="border-l-2 w-36 h-28 flex flex-col justify-center text-center">
          <div className="text-center font-bold">12</div>
          <div className="mt-2 text-xs text-gray-500">Completed</div>
        </div>
        <div className="border-l-2 border-r-2 w-36 h-28 flex flex-col justify-center text-center">
          <div className="text-center font-bold">4</div>
          <div className="mt-2 text-xs text-gray-500">Canceled</div>
        </div>
      </div>
    </div>
  );
}
