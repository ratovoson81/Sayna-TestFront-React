import Title from "./Title";
import Card from "./Card";

const Container = () => {
  return (
    <div className="m-8">
      <Title />
      <div className="flex space-x-4 mt-8">
        <Card />
      </div>
    </div>
  );
};

export default Container;
