import Header from "./components/Header";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex  justify-center px-4 md:px-[90px] xl:px-[357px]">
      <Navbar />
      <Header />
    </div>
  );
}
