import React from 'react'
import leaf from "../image/leaf.svg";


function Footer() {
    return (
        <div
        className="relative w-full mt-20 text-sm py-2 text-white text-center"
        style={{ backgroundColor: "#FFAF00" }}
      >
        Copyright @ 2020 Dewe Tour - Your Name - NIS. All Rights reserved
        <div className="absolute" style={{ bottom: 0, right: 0 }}>
          <img src={leaf} />
        </div>
      </div>
    )
}

export default Footer
