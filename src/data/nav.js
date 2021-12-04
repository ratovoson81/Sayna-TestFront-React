import { ImHome } from "react-icons/im";
import { BsCreditCard, BsPerson } from "react-icons/bs";
import { GrTransaction } from "react-icons/gr";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { TiContacts } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";

export const TopNav = [
  { icon: <ImHome size={20} />, name: "Overview" },
  { icon: <BsCreditCard size={20} style={{ color: "grey" }} />, name: "Cards" },
  {
    icon: <GrTransaction size={20} style={{ color: "grey" }} />,
    name: "Payments",
    child: [
      { elem: "element 1" },
      { elem: "element 2" },
      { elem: "element 3" },
    ],
  },
  {
    icon: <HiOutlineDocumentReport size={20} style={{ color: "grey" }} />,
    name: "Repots",
    child: [
      { elem: "element 1" },
      { elem: "element 2" },
      { elem: "element 3" },
    ],
  },
  {
    icon: <TiContacts size={20} style={{ color: "grey" }} />,
    name: "Contacts",
  },
];

export const BottomNav = [
  {
    icon: <FiSettings size={20} style={{ color: "grey" }} />,
    name: "Settings",
  },
  { icon: <BsPerson size={20} style={{ color: "grey" }} />, name: "Account" },
];
