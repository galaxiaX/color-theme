import { AiOutlineLike, AiOutlineGift } from "react-icons/ai";
import { TfiComment } from "react-icons/tfi";
import { IoDiamondOutline } from "react-icons/io5";
import { BsBoxArrowUp } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const Statistic = () => {
  const statsData = [
    {
      type: "Like",
      number: 34,
      icon: AiOutlineLike,
    },
    {
      type: "Comment",
      number: 56,
      icon: TfiComment,
    },
    {
      type: "Point",
      number: 450,
      icon: AiOutlineGift,
    },
    {
      type: "Diamond",
      number: 40,
      icon: IoDiamondOutline,
    },
  ];

  const preferColor = useSelector((state: RootState) => state.color.value);

  return (
    <>
      <div className="flex justify-between px-8 text-sm py-4">
        <h4 className="text-black">18 December 2019</h4>
        <div style={{ color: preferColor }}>
          <BsBoxArrowUp size={20} />
        </div>
      </div>
      <div className="grid grid-cols-2 px-8 pb-4 gap-4">
        {statsData.map((stat) => (
          <div
            key={stat.type}
            className="border border-[#bdbdbd] rounded-md p-4 pb-8 flex flex-col gap-8"
          >
            <div
              className="flex gap-2 justify-center items-center"
              style={{ color: preferColor }}
            >
              <stat.icon size={22} />
              {stat.type}
            </div>

            <div>
              <p className="text-black text-3xl font-bold">{stat.number}</p>
              <p>{stat.type}s</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Statistic;
