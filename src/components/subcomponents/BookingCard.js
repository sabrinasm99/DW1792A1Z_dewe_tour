import React, { useState, useEffect } from "react";
import { useLocation, useParams, useHistory } from "react-router-dom";
import icon2 from "../../image/icon2.svg";
import axios from "axios";

function BookingCard({ posts, setShowModalApprove }) {
  const location = useLocation();
  const currentPathname = location.pathname;
  const history = useHistory();
  const { id } = useParams();
  const [modalPayment, setModalPayment] = useState(false);
  const [showModalPhoto, setShowModalPhoto] = useState(false);
  const [currentEdit, setCurrentEdit] = useState({
    idTransaction: "",
    attachment: "",
  });
  const [message, setMessage] = useState("");
  const [fileObj, setFileObj] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const { token } = localStorage;

  const handleChangeImage = (e) => {
    let file = e.target.files[0];
    if (file) {
      setFileURL(URL.createObjectURL(file));
      setFileObj(file);
    } else {
      setFileURL(null);
      setFileObj(null);
    }
  };

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const openModalPhoto = (id) => {
    setMessage("");
    axios
      .get(`https://backend-dewetour.herokuapp.com/api/v1/transaction/${id}`, config)
      .then((res) => {
        const { id, attachment } = res.data.data;
        const newCurrentEdit = {
          ...currentEdit,
          idTransaction: id,
          attachment,
        };
        setCurrentEdit(newCurrentEdit);
        setShowModalPhoto(!showModalPhoto);
      })
      .catch((err) => console.log(err));
  };

  const saveImage = (e) => {
    e.preventDefault();
    let formData = new FormData();
    if (fileObj) formData.append("attachment", fileObj);
    else if (currentEdit.attachment)
      formData.append("attachment", currentEdit.attachment);
    axios
      .patch(
        `https://backend-dewetour.herokuapp.com/api/v1/transaction-user-upload/${currentEdit.idTransaction}`,
        formData,
        config
      )
      .then((res) => {
        setShowModalPhoto(!showModalPhoto);
      })
      .catch((err) => setMessage(err.response.data.message));
  };

  const closeModalPhoto = () => {
    const newCurrentEdit = {
      ...currentEdit,
      idTransaction: "",
      attachment: "",
    };
    setCurrentEdit(newCurrentEdit);
    setFileObj(null);
    setFileURL(null);
    setMessage("");
    setShowModalPhoto(!showModalPhoto);
  };

  const clickHere = () => {
    history.push(currentPathname);
    setModalPayment(!modalPayment);
  };
  const clickPay = (id) => {
    axios
      .patch(
        `https://backend-dewetour.herokuapp.com/api/v1/transaction-user-agree/${id}`,
        { status: "Waiting Approve" },
        config
      )
      .then((res) => {
        setModalPayment(!modalPayment);
        setMessage("");
      })
      .catch((err) => setMessage(err.response.data.message));
  };

  const clickApprove = (id) => {
    let formData = new FormData();
    formData.append("status", "Approve");
    formData.append("attachment", fileObj);
    axios
      .patch(
        `https://backend-dewetour.herokuapp.com/api/v1/transaction-admin/${id}`,
        formData,
        config
      )
      .then((res) => {
        setShowModalApprove(false);
      })
      .catch((err) => console.log(err));
  };
  let boxModalPayment = null;
  if (modalPayment)
    boxModalPayment = (
      <>
        <div
          className={`${
            modalPayment ? "block" : "hidden"
          } absolute bg-white rounded px-10 py-1 text-center`}
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, 0)",
            zIndex: 200,
          }}
        >
          <h3>Your payment will be confirmed within 1 x 24 hours</h3>
          <h3>
            To see orders click{" "}
            <p onClick={clickHere} className="inline font-bold cursor-pointer">
              Here
            </p>{" "}
            thank you
          </h3>
        </div>
        <div
          onClick={clickHere}
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

  let modalPhoto = null;
  if (showModalPhoto)
    modalPhoto = (
      <>
        <div
          style={{
            position: "fixed",
            zIndex: 200,
            transform: "translate(-50%,-50%)",
            backgroundColor: "white",
            left: "50%",
            top: "50%",
            width: "350px",
            boxShadow: "1px 1px 8px black",
          }}
          className="rounded-md p-4"
        >
          {fileURL || currentEdit.attachment ? (
            <img
              src={
                fileURL
                  ? fileURL
                  : `https://backend-dewetour.herokuapp.com/image/${currentEdit.attachment}`
              }
              className="w-full"
              alt="image"
            />
          ) : (
            <div
              className="w-full rounded flex justify-center items-center text-center"
              style={{
                backgroundColor: "lightgray",
                height: "16em",
              }}
            >
              <span
                style={{
                  color: "grey",
                  letterSpacing: "3px",
                  fontWeight: 400,
                }}
                className="px-1 text-2xl"
              >
                PAYMENT PROOF
              </span>
            </div>
          )}
          <input
            type="file"
            onChange={handleChangeImage}
            accept="image/*"
            className="mt-2 outline-none"
          />
          <h1 className="text-sm text-red-600">{message}</h1>
          <div className="flex text-white mt-4">
            <button
              onClick={saveImage}
              className="px-3 py-1 font-semibold rounded ml-auto mr-3 focus:outline-none"
              style={{ backgroundColor: "#0ACF83" }}
            >
              Save
            </button>
            <button
              onClick={closeModalPhoto}
              className="px-3 py-1 font-semibold rounded focus:outline-none"
              style={{ backgroundColor: "#FF0742" }}
            >
              Cancel
            </button>
          </div>
        </div>
        <div
          onClick={closeModalPhoto}
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

  const detail = posts.data.data;
  let newUserDataTrip = null;
  if (!Array.isArray(detail)) {
    newUserDataTrip = (
      <div
        className={`${
          location.pathname === "/profile" ? "mt-8" : "mt-0"
        } bg-white rounded border-2 py-2 px-4`}
        style={{ borderColor: "#B7B7B7" }}
      >
        <div className="flex">
          <img src={icon2} />
          <div className="ml-auto flex items-center">
            <h2 className="text-3xl font-bold">Booking</h2>
          </div>
        </div>
        <div className="flex">
          <h4 className="ml-auto" style={{ color: "#878787" }}>
            {detail.bookingDate}
          </h4>
        </div>
        <div className="flex">
          <div className="flex w-4/5">
            <div className="w-1/2">
              <h2 className="text-xl font-bold">{detail.trip.title}</h2>

              <h4 className="text-sm" style={{ color: "#959595" }}>
                {detail.trip.country.name}
              </h4>
              <div
                className={`${
                  detail.status === "Approve"
                    ? "bg-green-100"
                    : detail.status === "Waiting Approve"
                    ? "bg-orange-100"
                    : "bg-red-100"
                } mt-5 text-sm py-1 w-1/3 text-center rounded`}
                style={
                  detail.status === "Approve"
                    ? { color: "#0BDC5F" }
                    : detail.status === "Waiting Approve"
                    ? { color: "#FF9900" }
                    : { color: "#EC7A7A" }
                }
              >
                {detail.status}
              </div>
            </div>
            <div className="w-1/4">
              <h2 className="ml-auto font-bold">Date Trip</h2>
              <h4 className="text-sm" style={{ color: "#959595" }}>
                {detail.trip.dateTrip}
              </h4>
              <h2 className="font-bold mt-5">Accomodation</h2>
              <h4 className="text-sm" style={{ color: "#959595" }}>
                {detail.trip.accomodation}
              </h4>
            </div>
            <div className="w-1/4">
              <h2 className="font-bold">Duration</h2>
              <h4 className="text-sm" style={{ color: "#959595" }}>
                {detail.trip.day} Days {detail.trip.night} Nights
              </h4>
              <h2 className="font-bold mt-5">Transportation</h2>
              <h4 className="text-sm" style={{ color: "#959595" }}>
                {detail.trip.transportation}
              </h4>
            </div>
          </div>
          <div className="w-1/5">
            <div className="flex flex-col h-full w-full">
              {detail.attachment || fileURL ? (
                <img
                  src={`${
                    fileURL
                      ? fileURL
                      : `https://backend-dewetour.herokuapp.com/image/${detail.attachment}`
                  }`}
                  className="w-full"
                  alt="image"
                />
              ) : (
                <div
                  className="w-full flex justify-center items-center text-center h-full"
                  style={{
                    backgroundColor: "lightgray",
                  }}
                >
                  <span
                    style={{
                      color: "grey",
                      letterSpacing: "1px",
                      fontWeight: 400,
                    }}
                    className="px-1 text-sm"
                  >
                    NO PAYMENT PROOF
                  </span>
                </div>
              )}
              <input
                type="file"
                onChange={handleChangeImage}
                accept="image/*"
                className={`${
                  detail.status === "Approve" ? "hidden" : "block"
                } mt-2`}
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <h5 className="ml-auto text-xs">
            {location.pathname === "/profile"
              ? "TCK0101"
              : "upload payment proof"}
          </h5>
        </div>
        <div
          className="flex border-b-2"
          style={{ borderColor: "rgba(183, 183, 183, 0.5)" }}
        >
          <div className="w-2/3 flex">
            <h2 className="w-1/4 font-bold">ID Order</h2>
            <h2 className="w-1/4 font-bold">Full Name</h2>
            <h2 className="w-1/4 font-bold">Gender</h2>
            <h2 className="w-1/4 font-bold">Phone</h2>
          </div>
        </div>
        <div
          className="border-b-2 flex"
          style={{ borderColor: "rgba(183, 183, 183, 0.5)" }}
        >
          <div className="w-2/3 flex py-1" style={{ color: "#B1B1B1" }}>
            <h2 className="w-1/4">{detail.id}</h2>
            <h2 className="w-1/4">{detail.user.fullName}</h2>
            <h2 className="w-1/4">{detail.user.gender}</h2>
            <h2 className="w-1/4">{detail.user.phone}</h2>
          </div>
          <div className="w-1/3 flex font-bold">
            <h2 className="w-1/2">Qty</h2>
            <h2 className="w-1/2">: {detail.counterQty}</h2>
          </div>
        </div>
        <div className="flex font-bold">
          <div className="w-1/3 ml-auto flex pt-2">
            <h2 className="w-1/2">Total</h2>
            <h2 className="w-1/2">
              :{" "}
              <p className="inline" style={{ color: "#FF0000" }}>
                IDR. {detail.total.toLocaleString()}
              </p>
            </h2>
          </div>
        </div>
        <div
          className={`${
            location.pathname === "/list-transaction" &&
            detail.status === "Waiting Approve"
              ? "flex"
              : "hidden"
          } mt-5 text-white`}
        >
          <div className="ml-auto">
            <button
              onClick={() => setShowModalApprove(false)}
              className="px-3 py-1 font-semibold rounded mr-3"
              style={{ backgroundColor: "#FF0742" }}
            >
              Cancel
            </button>
            <button
              onClick={() => clickApprove(detail.id)}
              className="px-3 py-1 font-semibold rounded"
              style={{ backgroundColor: "#0ACF83" }}
            >
              Approve
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    newUserDataTrip = detail.map((val) => {
      return (
        <div key={val.id}>
          <div
            className={`${
              location.pathname === "/profile" ||
              location.pathname == `/payment/${id}`
                ? "mt-8"
                : "mt-0"
            } bg-white rounded border-2 py-2 px-4`}
            style={{ borderColor: "#B7B7B7" }}
          >
            <div className="flex">
              <img src={icon2} />
              <div className="ml-auto flex items-center">
                <h2 className="text-3xl font-bold">Booking</h2>
              </div>
            </div>
            <div className="flex">
              <h4 className="ml-auto" style={{ color: "#878787" }}>
                {val.bookingDate}
              </h4>
            </div>
            <div className="flex">
              <div className="flex w-4/5">
                <div className="w-1/2">
                  <h2 className="text-xl font-bold">{val.trip.title}</h2>

                  <h4 className="text-sm" style={{ color: "#959595" }}>
                    {val.trip.country.name}
                  </h4>
                  <div
                    className={`${
                      val.status === "Approve"
                        ? "bg-green-100"
                        : val.status === "Waiting Approve"
                        ? "bg-orange-100"
                        : "bg-red-100"
                    } mt-5 text-sm py-1 w-1/3 text-center rounded`}
                    style={
                      val.status === "Approve"
                        ? { color: "#0BDC5F" }
                        : val.status === "Waiting Approve"
                        ? { color: "#FF9900" }
                        : { color: "#EC7A7A" }
                    }
                  >
                    {val.status}
                  </div>
                </div>
                <div className="w-1/4">
                  <h2 className="ml-auto font-bold">Date Trip</h2>
                  <h4 className="text-sm" style={{ color: "#959595" }}>
                    {val.trip.dateTrip}
                  </h4>
                  <h2 className="font-bold mt-5">Accomodation</h2>
                  <h4 className="text-sm" style={{ color: "#959595" }}>
                    {val.trip.accomodation}
                  </h4>
                </div>
                <div className="w-1/4">
                  <h2 className="font-bold">Duration</h2>
                  <h4 className="text-sm" style={{ color: "#959595" }}>
                    {val.trip.day} Days {val.trip.night} Nights
                  </h4>
                  <h2 className="font-bold mt-5">Transportation</h2>
                  <h4 className="text-sm" style={{ color: "#959595" }}>
                    {val.trip.transportation}
                  </h4>
                </div>
              </div>
              <div className="w-1/5">
                <div className="flex flex-col h-full w-full">
                  {val.attachment ? (
                    <img
                      src={`https://backend-dewetour.herokuapp.com/image/${val.attachment}`}
                      className="w-full"
                      alt="image"
                    />
                  ) : (
                    <div
                      className="w-full flex justify-center items-center text-center h-full"
                      style={{
                        backgroundColor: "lightgray",
                      }}
                    >
                      <span
                        style={{
                          color: "grey",
                          letterSpacing: "1px",
                          fontWeight: 400,
                        }}
                        className="px-1 text-sm"
                      >
                        NO PAYMENT PROOF
                      </span>
                    </div>
                  )}
                  <button
                    onClick={() => openModalPhoto(val.id)}
                    className={`${
                      val.status !== "Waiting Payment" ? "hidden" : "block"
                    } w-full py-2 mt-3 text-white text-center rounded text-sm font-semibold cursor-pointer focus:outline-none`}
                    style={{ backgroundColor: "#FFAF00" }}
                  >
                    Upload Payment Proof
                  </button>
                </div>
              </div>
            </div>
            <div className="flex">
              <h5 className="ml-auto text-xs">
                {location.pathname === "/profile"
                  ? "TCK0101"
                  : "upload payment proof"}
              </h5>
            </div>
            <div
              className="flex border-b-2"
              style={{ borderColor: "rgba(183, 183, 183, 0.5)" }}
            >
              <div className="w-2/3 flex">
                <h2 className="w-1/4 font-bold">ID Order</h2>
                <h2 className="w-1/4 font-bold">Full Name</h2>
                <h2 className="w-1/4 font-bold">Gender</h2>
                <h2 className="w-1/4 font-bold">Phone</h2>
              </div>
            </div>
            <div
              className="border-b-2 flex"
              style={{ borderColor: "rgba(183, 183, 183, 0.5)" }}
            >
              <div className="w-2/3 flex py-1" style={{ color: "#B1B1B1" }}>
                <h2 className="w-1/4">{val.id}</h2>
                <h2 className="w-1/4">{val.user.fullName}</h2>
                <h2 className="w-1/4">{val.user.gender}</h2>
                <h2 className="w-1/4">{val.user.phone}</h2>
              </div>
              <div className="w-1/3 flex font-bold">
                <h2 className="w-1/2">Qty</h2>
                <h2 className="w-1/2">: {val.counterQty}</h2>
              </div>
            </div>
            <div className="flex font-bold">
              <div className="w-1/3 ml-auto flex pt-2">
                <h2 className="w-1/2">Total</h2>
                <h2 className="w-1/2">
                  :{" "}
                  <p className="inline" style={{ color: "#FF0000" }}>
                    IDR. {val.total.toLocaleString()}
                  </p>
                </h2>
              </div>
            </div>
          </div>
          <button
            onClick={() => clickPay(val.id)}
            className={`${
              val.status !== "Waiting Payment" ? "hidden" : "block"
            } flex ml-auto rounded px-16 py-2 text-white text-sm font-semibold`}
            style={{ backgroundColor: "#FFAF00", marginTop: "20.5px" }}
          >
            PAY
          </button>
          <div className="flex">
            <h3 className="ml-auto text-sm text-red-600">{message}</h3>
          </div>
        </div>
      );
    });
  }
  return (
    <>
      {newUserDataTrip}
      {boxModalPayment}
      {modalPhoto}
    </>
  );
}

export default BookingCard;
