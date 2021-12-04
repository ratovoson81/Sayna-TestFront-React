import { IoPaperPlaneOutline } from "react-icons/io5";
import { AiOutlineCreditCard } from "react-icons/ai";
import { BsPlusSquare, BsArrowLeftRight } from "react-icons/bs";

export const Activities = [
  {
    icon: <IoPaperPlaneOutline size={20} style={{ color: "gray" }} />,
    name: "To Martin Mitchel",
    type: "Sent",
    price: "- 3.004.52",
  },
  {
    icon: <IoPaperPlaneOutline size={20} style={{ color: "gray" }} />,
    name: "To Jane Klamberberg",
    type: "Sent",
    price: "- 1.023.19",
  },
  {
    icon: <BsArrowLeftRight size={20} style={{ color: "gray" }} />,
    name: "EUR to USD",
    type: "Conversion",
    price: "+ 1,456.00",
  },
];

export const YesterdayActivities = [
  {
    icon: <AiOutlineCreditCard size={20} style={{ color: "gray" }} />,
    name: "Starbucks",
    type: "Cafe & Restaurants",
    price: "- 5.99",
  },
  {
    icon: <BsPlusSquare size={20} style={{ color: "gray" }} />,
    name: "Deposit to your USD Balance",
    type: "Opened",
    price: "4,000.00",
  },
];
