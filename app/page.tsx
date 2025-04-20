import Header from "./components/Header";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex  justify-center px-7 md:px-[90px] xl:px-[357px]">
      <Navbar />
      <Header />
    </div>
  );
}
