import React from "react";
import { listTransaction } from "../fakedata/ListTransaction";
import search from "../image/search.svg";

function ListTransactionContent() {
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
        <div
          className="w-1/6 p-3"
        >
          {val.bukti}
        </div>
        <div className="w-1/6 p-3"
        style={
            val.status === "Pending"
              ? { color: "#F7941E" }
              : val.status === "Approve"
              ? { color: "#0ACF83" }
              : { color: "#FF0742" }
          }>{val.status}</div>
        <div className="w-1/6 p-3">
          <img src={search} />
        </div>
      </div>
    );
  });
  return (
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
  );
}

export default ListTransactionContent;
