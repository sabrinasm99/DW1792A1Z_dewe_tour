import React from "react";
import HeaderHome from '../components/HeaderHome';
import Footer from '../components/Footer';
import MixCards from '../components/MixCards';
import hibiscus from '../image/hibiscus.svg';
import palm from '../image/palm.svg';

function Home() {
  return (
    <React.Fragment>
      <HeaderHome />
      <MixCards />
      <Footer />
      <div className="absolute" style={{ top: "68%", right: 0 }}>
        <img src={hibiscus} />
      </div>
      <div className="absolute" style={{ top: "115%", left: 0 }}>
        <img src={palm} />
      </div>
    </React.Fragment>
  );
}

export default Home;
