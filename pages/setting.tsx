import NavBar from "@/components/NavBar";
import TopBar from "@/components/TopBar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setColor } from "@/store";

const SettingPage = () => {
  const preferColor = useSelector((state: RootState) => state.color.value);
  const [pickColor, setPickColor] = useState(preferColor);

  const dispatch = useDispatch();

  const handleColorSave = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    dispatch(setColor(pickColor));
  };

  return (
    <>
      <TopBar label="Setting" />

      <form
        onSubmit={handleColorSave}
        className="flex flex-col items-center justify-center gap-4 py-8 sm:px-20"
      >
        <div className="flex flex-col items-center gap-2">
          <p>Pick color that you prefer</p>
          <input
            type="color"
            id="color"
            className="border-2 w-20 shadow-sm"
            value={pickColor}
            onChange={(ev) => setPickColor(ev.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-2 text-white text-sm">
          <button
            type="button"
            onClick={() => setPickColor("#3766ff")}
            className="px-4 py-2 bg-gray-400 rounded-xl"
          >
            Reset
          </button>
          <button type="submit" className="px-4 py-2 bg-[#3766ff] rounded-xl">
            Save
          </button>
        </div>
      </form>

      <div
        style={{ backgroundColor: pickColor }}
        className="w-5/6 text-xl mx-auto flex flex-col gap-2 justify-around text-center py-8 max-w-md"
      >
        <p className="text-black">Black Text</p>
        <p className="text-black font-bold">Black Bold Text</p>
        <p className="text-white">White Text</p>
        <p className="text-white font-bold">White Bold Text</p>
      </div>

      <div
        style={{ color: pickColor }}
        className="w-5/6 text-xl mx-auto flex flex-col gap-2 justify-around text-center py-8"
      >
        <p>Demo Text</p>
        <p className="font-bold">Demo Bold Text</p>
      </div>
      <NavBar />
    </>
  );
};

export default SettingPage;
