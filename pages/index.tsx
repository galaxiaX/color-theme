import NavBar from "@/components/NavBar";
import TopBar from "@/components/TopBar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Color Change</title>
      </Head>
      <TopBar label="Home" />
      <section className="flex flex-col gap-4 h-96 text-center mt-24 flex-wrap sm:px-20">
        <h2 className="text-4xl font-semibold">Home</h2>
        <p className="text-xl px-4">
          This is a demo Home page, there are nothing here.
        </p>
        <p className="text-xl px-4">
          See some feature in <b>Report</b>, <b>Statistic</b> and <b>Setting</b>{" "}
          pages.
        </p>
      </section>
      <NavBar />
    </>
  );
}
