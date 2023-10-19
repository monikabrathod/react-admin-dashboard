import React, { useState } from "react";
import classNames from "classnames";
import { Menu } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import { TbHexagonLetterO } from "react-icons/tb";
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "../../lib/constants/navigation.jsx";

const linkClass =
  "flex items-center gap-2 text-sm px-3 py-4  hover:no-underline active:bg-violet-950 rounded-lg";

export default function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const sidebarClass = classNames(
    "bg-indigo-950 w-70 p-5 flex flex-col main-sidebar",
    {
      hidden: !isSidebarOpen,
    }
  );
  return (
    <>
      <div className={sidebarClass}>
        <div className="flex items-center gap-2 px-3 py-3 text-white">
          <TbHexagonLetterO fontSize={28} />
          <span className="text-white text-lg font-semibold">Dashboard</span>
        </div>
        <div className="py-8 flex flex-1 flex-col gap-0.8">
          {DASHBOARD_SIDEBAR_LINKS.map((link, index) => {
            return (
              <div key={index} className="relative">
                <SidebarLink key={link.key} link={link} />
                <i className="ri-arrow-right-s-line ml-44 text-slate-400 cursor-pointer absolute top-3"></i>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-0.5 ">
          {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
            <SidebarLink key={link.key} link={link} />
          ))}
          <Menu as="div" className="relative bg-violet-950 rounded-lg">
            <div className={classNames(linkClass, "cursor-pointer text-white")}>
              <Menu.Button className="flex text-sm">
                <div
                  className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage:
                      'url("https://source.unsplash.com/80x80?face")',
                  }}
                >
                  <span className="sr-only">Hugh Jackson</span>
                </div>
                <span>
                  <div className="text-sm text-white -ml-12">Evano</div>
                  <div className="text-neutral-400 w-max ml-4">
                    Project Manager
                  </div>
                </span>
              </Menu.Button>
              <i className="ri-arrow-down-s-line text-zinc-400 text-2xl cursor-pointer"></i>
            </div>
          </Menu>
        </div>
      </div>
      <div
        className="text-white text-2xl cursor-pointer"
        onClick={toggleSidebar}
      >
        <i className="ri-arrow-right-circle-line text-[#020617]"></i>
      </div>
    </>
  );
}

function SidebarLink({ link }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={link.path}
      className={classNames(
        pathname === link.path
          ? "bg-violet-950 text-white"
          : "text-neutral-400",
        linkClass
      )}
    >
      <span className="text-xl">{link.icon}</span>
      {link.label}
    </Link>
  );
}
