import React, { useEffect, useState } from "react";
import name from "../image/name.svg";
import email from "../image/email.svg";
import phone from "../image/phone.svg";
import place from "../image/place.svg";
import userprofile from "../image/userprofile.png";
import BookingCard from "./subcomponents/BookingCard";
import axios from "axios";
import { useQuery } from "react-query";

function ProfileContent({ posts }) {
  const detail = posts.data.data;
  const [currentEdit, setCurrentEdit] = useState({
    image: "",
    fileObj: null,
    fileURL: null,
  });
  const [showModalPhoto, setShowModalPhoto] = useState(false);
  const { token, image, userId } = localStorage;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const getData = async () => {
    const result = await axios.get(
      `http://localhost:5000/api/v1/transaction-by-name/${userId}`,
      config
    );
    return result;
  };

  const { isLoading, data, error } = useQuery(
    "detailTransactionByName",
    getData
  );
  if (isLoading)
    return (
      <div className="flex justify-center">
        <h1 className="text-2xl font-semibold">Loading...</h1>
      </div>
    );

  const openModalPhoto = (id) => {
    axios
      .get(`http://localhost:5000/api/v1/user/${id}`, config)
      .then((res) => {
        const { image } = res.data.data;
        setShowModalPhoto(!showModalPhoto);
        const newCurrentEdit = {
          ...currentEdit,
          image,
        };
        setCurrentEdit(newCurrentEdit);
      })
      .catch((err) => console.log(err));
  };

  const handleChangeImage = (e) => {
    let file = e.target.files[0];
    if (file) {
      const newCurrentEdit = {
        ...currentEdit,
        fileObj: file,
        fileblob: URL.createObjectURL(file),
      };
      setCurrentEdit(newCurrentEdit);
    } else {
      const newCurrentEdit = {
        ...currentEdit,
        fileObj: null,
        fileblob: null,
      };
      setCurrentEdit(newCurrentEdit);
    }
  };

  const saveImage = (e) => {
    e.preventDefault();
    let formData = new FormData();
    if (currentEdit.fileObj) formData.append("image", currentEdit.fileObj);
    axios
      .patch(`http://localhost:5000/api/v1/user/${userId}`, formData, config)
      .then((res) => {
        localStorage.removeItem("image");
        localStorage.setItem("image", res.data.data.image);
        const newCurrentEdit = {
          ...currentEdit,
          fileObj: null,
          fileblob: null,
        };
        setCurrentEdit(newCurrentEdit);
        setShowModalPhoto(!showModalPhoto);
      })
      .catch((err) => console.log(err));
  };

  const closeModalPhoto = () => {
    const newCurrentEdit = {
      ...currentEdit,
      fileObj: null,
      fileblob: null,
    };
    setCurrentEdit(newCurrentEdit);
    setShowModalPhoto(!showModalPhoto);
  };

  let modalPhoto = null;
  let srcImg = `http://localhost:5000/image/${currentEdit.image}`;
  if (currentEdit.fileObj) {
    srcImg = currentEdit.fileblob;
  }
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
          {currentEdit.image || currentEdit.fileObj ? (
            <img src={srcImg} className="w-full" alt="image" />
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
                PROFILE PHOTO
              </span>
            </div>
          )}
          <input
            type="file"
            onChange={handleChangeImage}
            accept="image/*"
            className="mt-2 outline-none"
          />
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
                  <h3 className="font-semibold text-sm">{detail.fullName}</h3>
                  <h3 className="text-xs" style={{ color: "#8A8C90" }}>
                    Full name
                  </h3>
                </div>
              </div>
              <div className="flex mt-6">
                <img src={email} className="mr-3" />
                <div>
                  <h3 className="font-semibold text-sm">{detail.email}</h3>
                  <h3 className="text-xs" style={{ color: "#8A8C90" }}>
                    Email
                  </h3>
                </div>
              </div>
              <div className="flex mt-6">
                <img src={phone} className="mr-3" />
                <div>
                  <h3 className="font-semibold text-sm">{detail.phone}</h3>
                  <h3 className="text-xs" style={{ color: "#8A8C90" }}>
                    Mobile phone
                  </h3>
                </div>
              </div>
              <div className="flex mt-6">
                <img src={place} className="mr-3" />
                <div>
                  <h3 className="font-semibold text-sm">{detail.address}</h3>
                  <h3 className="text-xs" style={{ color: "#8A8C90" }}>
                    Address
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-1/3 flex flex-col">
              {image ? (
                <img
                  src={`http://localhost:5000/image/${image}`}
                  className="rounded"
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
                    PROFILE PHOTO
                  </span>
                </div>
              )}
              <div className="mt-auto">
                <button
                  className="w-full py-2 mt-3 text-white text-center rounded font-semibold cursor-pointer focus:outline-none"
                  style={{ backgroundColor: "#FFAF00" }}
                  onClick={() => openModalPhoto(userId)}
                >
                  Change Profile Photo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 px-40">
        <h1 className="text-2xl font-bold">History Trip</h1>
        {data.data.data.length > 0 ? (
          <BookingCard posts={data} />
        ) : (
          <div className="mt-8">No Transaction</div>
        )}
      </div>
      {modalPhoto}
    </>
  );
}

export default ProfileContent;
