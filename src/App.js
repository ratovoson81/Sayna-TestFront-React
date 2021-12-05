import "./css/tailwind.css";
import Nav from "./component/Nav";
import Container from "./component/Container";
import { BiMessageDetail } from "react-icons/bi";

function App() {
  return (
    <div className="flex">
      <div className="w-1/6 h-screen">
        <Nav />
      </div>
      <div className="bg-gray-100 w-5/6">
        <Container />
      </div>
      <div className="bottom-10 right-10 fixed  bg-blue-400 h-12 w-12 rounded-lg rounded-tl-none">
        <span className="flex justify-center items-center m-auto h-full">
          <BiMessageDetail style={{ color: "white" }} size={28} />
        </span>
      </div>
    </div>
  );
}

export default App;
