import React, { useState } from "react";
import search from "../image/search.svg";
import BookingCard from "./subcomponents/BookingCard";
import axios from "axios";

function ListTransactionContent({ posts }) {
  const [showModalApprove, setShowModalApprove] = useState(false);
  const [detailTransaction, setDetailTransaction] = useState({});
  const closeModalApprove = () => {
    setShowModalApprove(!showModalApprove);
  };

  const { token } = localStorage;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const clickDetail = (id) => {
    axios
      .get(`http://localhost:5000/api/v1/transaction/${id}`, config)
      .then((res) => {
        setDetailTransaction(res);
        setShowModalApprove(!showModalApprove);
      })
      .catch((err) => console.log(err));
  };

  let newListTransaction = null;
  if (posts.data.data.length === 0) {
    newListTransaction = (
      <h1 className='flex justify-center items-center'>
        No List Transaction
      </h1>
    )
  } else {
    newListTransaction = posts.data.data.map((val, index) => {
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
          <div className="w-1/6 p-3 flex items-center">{index + 1}</div>
          <div className="w-1/6 p-3 flex items-center">{val.user.fullName}</div>
          <div className="w-1/6 p-3 flex items-center">{val.trip.title}</div>
          <div className="w-1/6 p-3 flex items-center">{val.attachment}</div>
          <div
            className="w-1/6 p-3 flex items-center"
            style={
              val.status === "Waiting Approve"
                ? { color: "#F7941E" }
                : val.status === "Approve"
                ? { color: "#0ACF83" }
                : { color: "#FF0742" }
            }
          >
            {val.status}
          </div>
          <div className="w-1/6 p-3 flex items-center">
            <img
              src={search}
              className="cursor-pointer"
              onClick={() => clickDetail(val.id)}
            />
          </div>
        </div>
      );
    });
  }
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
          <BookingCard
            posts={detailTransaction}
            setShowModalApprove={setShowModalApprove}
          />
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
            className="flex border-b font-bold bg-blue-300 rounded-t"
            style={{ borderColor: "#B7B7B7" }}
          >
            <div className="w-1/6 p-3">No</div>
            <div className="w-1/6 p-3">Users</div>
            <div className="w-1/6 p-3">Trip</div>
            <div className="w-1/6 p-3">Payment Proof</div>
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
