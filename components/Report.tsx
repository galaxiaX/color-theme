import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { AiOutlineLike, AiOutlineGift } from "react-icons/ai";
import { TfiComment } from "react-icons/tfi";
import { MdPhotoLibrary } from "react-icons/md";
import { HiPhoto, HiPaperClip, HiAtSymbol } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

interface ReportProps {
  report: {
    name: string;
    role: string;
    title: string;
    text: string;
    timestamp: string;
    likes: string;
  };
}

const Report = ({ report }: ReportProps) => {
  const [showFullReport, setShowFullReport] = useState(false);

  const handleClick = () => {
    setShowFullReport(!showFullReport);
  };

  const preferColor = useSelector((state: RootState) => state.color.value);

  return (
    <button
      onClick={handleClick}
      className="border p-2 sm:p-8 m-2 rounded-lg w-full text-start"
    >
      <div className="flex gap-2 items-center">
        <div className="bg-gray-400 rounded-full flex text-white h-8 w-8 justify-center items-center">
          <FaUser size={20} />
        </div>

        <div className="">
          <h3>{report.name}</h3>
          <p className="text-xs text-gray-500">{report.role}</p>
        </div>
      </div>

      <div className="mt-2">
        <h4 className="font-medium">{report.title}</h4>

        {showFullReport ? (
          <>
            <p className="indent-8 text-sm">{report.text}</p>

            <p className="text-[#bdbdbd] mt-4">Image</p>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 text-gray-500 text-[5.7rem] sm:text-[10rem]">
              <HiPhoto />
              <HiPhoto />
              <HiPhoto />
            </div>

            <p className="text-[#bdbdbd] mt-4 mb-2">Attach File</p>
            <div className="flex gap-2 items-center">
              <HiPaperClip />
              <span style={{ color: preferColor }}>demo_file_name.pdf</span>
            </div>

            <div className="bg-[#d4deff] py-2 mt-4 text-sm text-center grid grid-cols-[5fr_1fr]">
              <div className="grid grid-cols-3 text-gray-400">
                <div className="border-r border-gray-400">Read (12)</div>
                <div className="border-r border-gray-400">Unread (25)</div>
                <div>Likes ({report.likes})</div>
              </div>
              <div style={{ color: preferColor }}>View &gt;</div>
            </div>

            <div
              className="my-4 grid grid-cols-2 gap-2"
              style={{ color: preferColor }}
            >
              <div
                className="flex p-2 justify-center items-center border rounded-xl"
                style={{ borderColor: preferColor }}
              >
                <AiOutlineGift />
                <span>Give Point</span>
              </div>

              <div
                className="flex p-2 justify-center items-center border rounded-xl"
                style={{ borderColor: preferColor }}
              >
                <AiOutlineLike />
                <span>Give Point</span>
              </div>
            </div>
            <div className="text-[#bdbdbd] grid grid-cols-[1fr_2fr] sm:flex gap-2">
              <div className="flex gap-2 items-center text-3xl">
                <MdPhotoLibrary />
                <HiPaperClip />
                <HiAtSymbol />
              </div>

              <input
                type="text"
                placeholder="Comment"
                className="p-2 border-2 rounded-xl"
              />
            </div>
          </>
        ) : null}
      </div>
      <div
        className="grid grid-cols-2 text-xs mt-2"
        style={{ color: preferColor }}
      >
        <div className="flex gap-2">
          <span className="text-[#bdbdbd]">{report.timestamp} days ago</span>
          <span>{report.likes} People likes</span>
        </div>

        <div className="flex gap-4 justify-end">
          <div className="flex items-center gap-1">
            <TfiComment size={16} />
            <span>Reply</span>
          </div>
          <div className="flex items-center gap-1">
            <AiOutlineLike size={18} />
            <span>Like</span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Report;
