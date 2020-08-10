import React, { useState } from "react";
import { listTransaction } from "../fakedata/ListTransaction";
import search from "../image/search.svg";
import BookingCard from "./subcomponents/BookingCard";

function ListTransactionContent() {
  const [showModalApprove, setShowModalApprove] = useState(false);
  const closeModalApprove = () => {
    setShowModalApprove(!showModalApprove);
  };
  let newListTransaction = listTransaction.map((val) => {
    return (
      <div
        key={val.id}
        className="flex border-b text-sm"
        style={
          val.id % 2 === 0
            ? { borderColor: "#B7B7B7" }
            : { borderColor: "#B7B7B7", backgroundColor: "#F9F9F9" }
        }
      >
        <div className="w-1/6 p-3">{val.id}</div>
        <div className="w-1/6 p-3">{val.users}</div>
        <div className="w-1/6 p-3">{val.trip}</div>
        <div className="w-1/6 p-3">{val.bukti}</div>
        <div
          className="w-1/6 p-3"
          style={
            val.status === "Pending"
              ? { color: "#F7941E" }
              : val.status === "Approve"
              ? { color: "#0ACF83" }
              : { color: "#FF0742" }
          }
        >
          {val.status}
        </div>
        <div className="w-1/6 p-3">
          <img
            src={search}
            className="cursor-pointer"
            onClick={() => setShowModalApprove(!showModalApprove)}
          />
        </div>
      </div>
    );
  });
  let modalApprove = null;
  if (showModalApprove)
    modalApprove = (
      <>
        <div
          className={`${showModalApprove ? "block" : "hidden"} fixed w-2/3`}
          style={{
            top: "50%",
            left: "50%",
            zIndex: 200,
            transform: "translate(-50%, -50%)",
          }}
        >
          <BookingCard />
        </div>
        <div
          onClick={closeModalApprove}
          style={{
            position: "fixed",
            zIndex: 199,
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        />
      </>
    );
  return (
    <>
      <div className="mt-20 px-20 pb-10">
        <h1 className="font-bold text-2xl">Incoming Transaction</h1>
        <div className="bg-white rounded mt-5">
          <div
            className="flex border-b font-bold"
            style={{ borderColor: "#B7B7B7" }}
          >
            <div className="w-1/6 p-3">No</div>
            <div className="w-1/6 p-3">Users</div>
            <div className="w-1/6 p-3">Trip</div>
            <div className="w-1/6 p-3">Bukti Transfer</div>
            <div className="w-1/6 p-3">Status Payment</div>
            <div className="w-1/6 p-3">Action</div>
          </div>
          {newListTransaction}
        </div>
      </div>
      {modalApprove}
    </>
  );
}

export default ListTransactionContent;
