import React from "react";
import HeaderHome from '../components/HeaderHome';
import FooterHome from '../components/FooterHome';
import MixCards from '../components/MixCards';
import hibiscus from '../image/hibiscus.svg';
import palm from '../image/palm.svg';

function Home() {
  return (
    <React.Fragment>
      <HeaderHome />
      <MixCards />
      <FooterHome />
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
