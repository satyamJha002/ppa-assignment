import Achivements from "./Components/body/Achivements";
import Calender from "./Components/body/Calender";
import Customers from "./Components/body/Customers";
import Unlock from "./Components/body/Unlock";
import Clients from "./Components/Clients";
import Community from "./Components/Community";
import HeroCarousel from "./Components/HeroCarousel";
import Navbar from "./Components/Navbar";
import FooterBig from "./Footer/FooterBig";
import Frame16 from "./Footer/Frame16";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroCarousel />
      <Clients />
      <Community />
      <Unlock />
      <Achivements />
      <Calender />
      <Customers />
      <Frame16 />
      <FooterBig />
    </main>
  );
}
