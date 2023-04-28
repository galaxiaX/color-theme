import { useState } from "react";
import { GoGraph } from "react-icons/go";
import { FaListUl } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const DatePicker = () => {
  const [timeSeries, setTimeSeries] = useState([
    {
      type: "Daily",
      isActive: true,
    },
    {
      type: "Weekly",
      isActive: false,
    },
    {
      type: "Monthly",
      isActive: false,
    },
  ]);

  const handleTimeSeriesClick = (index: number) => {
    setTimeSeries((prevState) =>
      prevState.map((series, i) => {
        if (i === index) {
          return { ...series, isActive: true };
        } else {
          return { ...series, isActive: false };
        }
      })
    );
  };

  const preferColor = useSelector((state: RootState) => state.color.value);

  return (
    <>
      <div className="pt-2 flex text-sm">
        <div className="w-3/4 grid grid-cols-3 px-4">
          {timeSeries.map((type, index) => (
            <button
              key={type.type}
              onClick={() => handleTimeSeriesClick(index)}
              className="pb-2 transition border-b-2"
              style={{
                color: type.isActive ? "black" : "",
                borderColor: type.isActive ? preferColor : "",
              }}
            >
              {type.type}
            </button>
          ))}
        </div>
        <div className="w-1/4 grid grid-cols-2 px-4">
          <div style={{ color: preferColor }}>
            <GoGraph size={24} />
          </div>
          <div>
            <FaListUl size={24} />
          </div>
        </div>
      </div>
      <div className="py-4 border-b-2 flex relative">
        <div className="w-5/6 flex flex-col gap-2">
          <ul className="grid grid-cols-9 px-2 text-[10px] text-black">
            <li></li>
            <li>M</li>
            <li>T</li>
            <li>W</li>
            <li>TH</li>
            <li>F</li>
            <li>S</li>
            <li>S</li>
            <li></li>
          </ul>
          <ul className="grid grid-cols-9 px-2 place-items-center text-sm">
            <li>&lt;</li>
            <li>17</li>
            <li>
              <h6
                className="w-6 rounded-full"
                style={{ backgroundColor: preferColor }}
              >
                18
              </h6>
            </li>
            <li>19</li>
            <li>20</li>
            <li>21</li>
            <li>22</li>
            <li>23</li>
            <li>&gt;</li>
          </ul>
        </div>
        <div className="w-1/6 pt-4 pr-4 text-xs" style={{ color: preferColor }}>
          <span>&darr; Today</span>
        </div>
        <div className="absolute p-1 border-2 rounded-full bg-white top-[68px] left-1/2 -translate-x-1/2 text-black">
          <SlArrowDown size={14} />
        </div>
      </div>
    </>
  );
};

export default DatePicker;
