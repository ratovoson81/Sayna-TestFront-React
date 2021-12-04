import Title from "./Title";
import Card from "./Card";
import Chart from "./Chart";
import Payement from "./Payement";
import Money from "./Money";
import Activity from "./Activity";

const Container = () => {
  return (
    <div className="m-8">
      <Title />
      <div>
        <Card />
      </div>
      <div className="mt-2 flex">
        <div className="w-7/12">
          <Chart />
          <div className="border-b-2 w-11/12 mt-8 m-auto"></div>
          <Payement />
          <Money />
        </div>
        <div className="border-l-2 w-5/12">
          <Activity />
        </div>
      </div>
    </div>
  );
};

export default Container;
