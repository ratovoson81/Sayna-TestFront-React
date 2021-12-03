import logo from "../assets/logo.svg";

const Title = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex">
        <div className="font-bold m-auto text-3xl">Your Cards</div>
        <button className="ml-4 bg-gray-200 pl-4 py-1 rounded text-sm flex items-center">
          New card
          <img className="self-center px-2" src={logo} alt="" width={45} />
        </button>
      </div>
      <img className="self-end" src={logo} alt="" width={50} />
    </div>
  );
};

export default Title;
