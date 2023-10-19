import { HiOutlineCube } from "react-icons/hi";
import {
  TbSquareKey,
  TbHelpSquareRounded,
  TbUserSquareRounded,
  TbDiscount2,
} from "react-icons/tb";
import { CiDiscount1 } from "react-icons/ci";
import { LuDatabaseBackup } from "react-icons/lu";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <TbSquareKey />,
  },
  {
    key: "product",
    label: "Product",
    path: "/product",
    icon: <HiOutlineCube />,
    icon2: <CiDiscount1 />,
  },

  {
    key: "customers",
    label: "Customers",
    path: "/customers",
    icon: <TbUserSquareRounded />,
  },
  {
    key: "income",
    label: "Income",
    path: "/income",
    icon: <LuDatabaseBackup />,
  },
  {
    key: "promote",
    label: "Promote",
    path: "/promote",
    icon: <TbDiscount2 />,
  },
  {
    key: "help",
    label: "Help",
    path: "/help",
    icon: <TbHelpSquareRounded />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [];
