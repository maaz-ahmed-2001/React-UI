import Banner from "../components/Banner/index.jsx";
import Business from "../components/Business/index.jsx";
import FindUs from "../components/FindUs/index.jsx";
import Footer from "../components/Footer/index.jsx";
import GetApp from "../components/GetApp/index.jsx";
import OurPartners from "../components/OurPartners/index.jsx";
import Questions from "../components/Question/index.jsx";
import Services from "../components/Services/index.jsx";

function Home() {
  document.title = "WeFresh | Home";

  return (
    <>
      <Banner />
      <Services />
      <FindUs />
      <OurPartners />
      <Questions />
      <GetApp />
      <Business />
      <Footer />
    </>
  );
}

export default Home;
