export default function Chart() {
  return (
    <div className="flex mt-4 space-x-16 ml-12">
      <div className="flex justify-center">
        <div className="flex">
          <div className="m-auto">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/test-sayna-fe3c4.appspot.com/o/donut0.png?alt=media&token=7f3b30e6-b24f-437f-882f-433594f26669"
              alt=""
              width={60}
            />
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
            <img
              src="https://firebasestorage.googleapis.com/v0/b/test-sayna-fe3c4.appspot.com/o/donut.png?alt=media&token=bac2e7c4-803e-4097-be27-679106f432bb"
              alt=""
              width={60}
              className="m-auto"
            />
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
