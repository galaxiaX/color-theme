import DatePicker from "@/components/DatePicker";
import NavBar from "@/components/NavBar";
import Statistic from "@/components/Statistics";
import TopBar from "@/components/TopBar";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

const StatisticPage = () => {
  const preferColor = useSelector((state: RootState) => state.color.value);

  return (
    <>
      <TopBar label="Statistic" />
      <section className="font-semibold text-[#bdbdbd] text-center sm:px-20">
        <div className="grid grid-cols-2 border-b-2 py-2 text-sm">
          <h3 className="border-r">Submission</h3>
          <h3 className="border-l" style={{ color: preferColor }}>
            Engagement
          </h3>
        </div>
        <DatePicker />
        <Statistic />
      </section>
      <NavBar />
    </>
  );
};

export default StatisticPage;
