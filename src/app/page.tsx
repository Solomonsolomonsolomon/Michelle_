import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./landingPage/Navbar";
import Carousel from "./landingPage/Carousel";
import ThirdSection from "./landingPage/Third-section";
import FourthSection from "./landingPage/Fourth-Section";
import FifthSection from "./landingPage/Fifth-Section";
import SixthSection from "./landingPage/Sixth-Section";
import SeventhSection from "./landingPage/Seventh-Section";
import Footer from "./landingPage/Footer";

const Home = () => {
  return (
    <>
      <NavBar />
      <Carousel parentWidth={100} />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <Footer />
    </>
  );
};

export default Home;
