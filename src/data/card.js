import { HiOutlineLockClosed } from "react-icons/hi";

export const Cards = [
  {
    name: "",
    price: "1242.42 USD",
    numero: "5495 7381 3759 2321",
    date: "04 / 24",
    lock: false,
    type: "master",
    onSelect: "background",
  },
  {
    name: "",
    price: "249.00 EUR",
    numero: "5495 7381 3759 2321",
    date: "04 / 24",
    lock: false,
    type: "visa",
    onSelect: " bg-gradient-to-br from-yellow-500 to-yellow-700",
  },
  {
    name: "Corporate",
    price: "249.00 EUR",
    numero: "5495 7381 3759 2321",
    date: "04 / 24",
    lock: <HiOutlineLockClosed size={20} />,
    type: "master",
    onSelect: " bg-gradient-to-tr from-black to-gray-700",
  },
  {
    name: "Corporate",
    price: "1242.42 USD",
    numero: "5495 7381 3759 2321",
    date: "04 / 24",
    lock: <HiOutlineLockClosed size={20} />,
    type: "visa",
    onSelect: "bg-gradient-to-bl from-green-500 to-green-700",
  },
];
