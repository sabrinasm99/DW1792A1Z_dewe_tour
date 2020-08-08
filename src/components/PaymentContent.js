import React from "react";
import icon2 from "../image/icon2.svg";
import payment from "../image/payment.png";
function PaymentContent() {
  return (
    <div className="px-56 mt-10">
      <div
        className="bg-white rounded border-2"
        style={{ borderColor: "#B1B1B1" }}
      >
        <div className="px-4">
          <div className="flex">
            <img src={icon2} />
            <div className="ml-auto flex items-center">
              <h2 className="text-3xl font-bold">Booking</h2>
            </div>
          </div>
          <div className="flex">
            <h4 className="ml-auto" style={{ color: "#878787" }}>
              <h4 className="font-bold inline">Saturday</h4>, 22 July 2020
            </h4>
          </div>
          <div className="flex">
            <div className="flex w-4/5">
              <div className="w-1/2">
                <h2 className="text-xl font-bold">6D/4N Fun Tassie Vacation</h2>
                
                <h4 className='text-sm' style={{color:'#959595'}}>Australia</h4>
                <div className='mt-5 text-sm py-1 bg-red-100 w-1/3 text-center rounded' style={{color:'#FF9900'}}>Waiting Approve</div>
              </div>
              <div className="w-1/4">
                <h2 className="ml-auto font-bold">Date Trip</h2>
                <h4 className='text-sm' style={{color:'#959595'}}>26 August 2020</h4>
                <h2 className="font-bold mt-5">Accomodation</h2>
                <h4 className='text-sm' style={{color:'#959595'}}>Hotel 4 Nights</h4>
              </div>
              <div className="w-1/4">
                <h2 className="font-bold">Duration</h2>
                <h4 className='text-sm' style={{color:'#959595'}}>6 Day 4 Night</h4>
                <h2 className="font-bold mt-5">Transportation</h2>
                <h4 className='text-sm' style={{color:'#959595'}}>Qatar Airways</h4>
              </div>
            </div>
            <div className='w-1/5'>
                <img src={payment}className='border-2 border-black ml-auto' />
            </div>
          </div>
            <div className='flex'>
                <h5 className='ml-auto text-xs'>upload payment proof</h5>
            </div>
            <div className='flex'>
                <div className='w-1/2 flex'>
                    <h2 className='w-1/4 font-bold'>No</h2>
                    <h2 className='w-1/4 font-bold'>Full Name</h2>
                    <h2 className='w-1/4 font-bold'>Gender</h2>
                    <h2 className='w-1/4 font-bold'>Phone</h2>
                </div>
            </div>
            <div className='border-t-2 border-b-2 flex' style={{borderColor:'rgba(183, 183, 183, 0.5)'}}>
            <div className='w-1/2 flex'>
            <h2 className='w-1/4'>1</h2>
                    <h2 className='w-1/4'>Radif Ganteng</h2>
                    <h2 className='w-1/4'>Male</h2>
                    <h2 className='w-1/4'>083896833112</h2>
                    </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentContent;
