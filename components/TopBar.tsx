import { RootState } from "@/store";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { MdTune } from "react-icons/md";
import { useSelector } from "react-redux";

interface HeaderProps {
  label: string;
}

const TopBar: React.FC<HeaderProps> = ({ label }) => {
  const preferColor = useSelector((state: RootState) => state.color.value);

  return (
    <header
      className="z-50 flex justify-between fixed pt-10 px-4 sm:px-24 top-0 w-full h-[80px] text-white font-semibold"
      style={{ backgroundColor: preferColor }}
    >
      <Link href="/">
        <IoHome size={24} />
      </Link>
      <h3>{label}</h3>

      <MdTune size={24} />
    </header>
  );
};

export default TopBar;
