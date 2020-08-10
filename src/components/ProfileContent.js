import React, { useEffect, useState } from "react";
import name from "../image/name.svg";
import email from "../image/email.svg";
import phone from "../image/phone.svg";
import place from "../image/place.svg";
import userprofile from "../image/userprofile.png";
import BookingCard from "./subcomponents/BookingCard";

function ProfileContent() {
  return (
    <>
      <div className="px-64 mt-24">
        <div className="bg-white rounded p-5">
          <div className="flex">
            <div className="w-2/3">
              <h1 className="text-2xl font-bold">Personal Info</h1>
              <div className="flex mt-8">
                <img src={name} className="mr-3" />
                <div>
                  <h3 className="font-semibold text-sm">Radif Ganteng</h3>
                  <h3 className="text-xs" style={{ color: "#8A8C90" }}>
                    Full name
                  </h3>
                </div>
              </div>
              <div className="flex mt-6">
                <img src={email} className="mr-3" />
                <div>
                  <h3 className="font-semibold text-sm">radifgans@gmail.com</h3>
                  <h3 className="text-xs" style={{ color: "#8A8C90" }}>
                    Email
                  </h3>
                </div>
              </div>
              <div className="flex mt-6">
                <img src={phone} className="mr-3" />
                <div>
                  <h3 className="font-semibold text-sm">0812-8623-8911</h3>
                  <h3 className="text-xs" style={{ color: "#8A8C90" }}>
                    Mobile phone
                  </h3>
                </div>
              </div>
              <div className="flex mt-6">
                <img src={place} className="mr-3" />
                <div>
                  <h3 className="font-semibold text-sm">
                    Perumahan Permata Bintaro Residence C-3
                  </h3>
                  <h3 className="text-xs" style={{ color: "#8A8C90" }}>
                    Address
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-1/3 h-full">
              <img src={userprofile} className="rounded" />
              <button
                className="w-full py-2 mt-3 text-white rounded font-semibold"
                style={{ backgroundColor: "#FFAF00" }}
              >
                Change Photo Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 px-40">
        <h1 className="text-2xl font-bold">History Trip</h1>
        <BookingCard />
      </div>
    </>
  );
}

export default ProfileContent;
