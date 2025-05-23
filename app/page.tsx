import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Request from "./components/Request";
import Services from "./components/Services";
import Work from "./components/Work";

export default function Home() {
  return (
    <div className="flex flex-col  justify-center px-4 md:px-[90px] xl:px-[357px]">
      <Navbar />
      <Header />
      <Work />
      <Services />
      <Pricing />
      <Request />
      <Footer />
    </div>
  );
}
