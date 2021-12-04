import "./css/tailwind.css";
import Nav from "./component/Nav";
import Container from "./component/Container";

function App() {
  return (
    <div className="flex">
      <div className="w-1/6  h-screen">
        <Nav />
      </div>
      <div className="bg-gray-100 w-5/6">
        <Container />
      </div>
    </div>
  );
}

export default App;
