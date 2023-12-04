import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import Header3 from "../components/Header3";
import Image from "next/image";
import Poster from "../components/Poster";
import Footer from "../components/Footer";
// import banner1 from '../public/banner1.avif'
const Home = () => {
  return (
    <div>
      <Header1 />
      <Header2 />
      <Header3 />
      <Poster />
      <Footer />
    </div>
  );
};

export default Home;
