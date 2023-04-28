import { BsPencilSquare, BsCheckCircleFill } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import { IoPieChart, IoSettings } from "react-icons/io5";
import NavBarItem from "./NavBarItem";

const NavBar = () => {
  const navLists = [
    {
      label: "Write",
      href: "/write",
      icon: BsPencilSquare,
    },
    {
      label: "Approved",
      href: "/approved",
      icon: BsCheckCircleFill,
    },
    {
      label: "Report",
      icon: FaPaperPlane,
      href: "/report",
    },
    {
      label: "Statistic",
      href: "/statistic",
      icon: IoPieChart,
    },
    {
      label: "Setting",
      href: "/setting",
      icon: IoSettings,
    },
  ];

  return (
    <nav className="grid grid-cols-5 z-50 bg-white fixed bottom-0 w-full h-[70px] border-t border-[#bdbdbd] text-[#bdbdbd] text-sm">
      {navLists.map((list, index) => (
        <NavBarItem
          key={index}
          label={list.label}
          href={list.href}
          icon={list.icon}
        />
      ))}
    </nav>
  );
};

export default NavBar;
