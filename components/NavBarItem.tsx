import { RootState } from "@/store";
import Link from "next/link";
import { useRouter } from "next/router";
import { IconType } from "react-icons";
import { useSelector } from "react-redux";

interface NavBarItemProps {
  label: string;
  href: string;
  icon: IconType;
  isActive?: boolean;
}
const NavBarItem: React.FC<NavBarItemProps> = ({
  label,
  href,
  icon: Icon,
  isActive = false,
}) => {
  const router = useRouter();
  const { pathname } = router;

  if (pathname === href) {
    isActive = true;
  }

  const preferColor = useSelector((state: RootState) => state.color.value);

  return (
    <Link
      href={href}
      className="flex flex-col transition justify-center items-center"
      style={{ color: isActive ? preferColor : "" }}
    >
      <Icon size={24} />
      <p>{label}</p>
    </Link>
  );
};

export default NavBarItem;
