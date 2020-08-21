import React from "react";
import HeaderPage from "../components/HeaderPage";
import Footer from "../components/Footer";
import ProfileContent from "../components/ProfileContent";
import { useQuery } from "react-query";
import axios from "axios";

function Profile() {
  const { id, token } = localStorage;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const getData = async () => {
    const result = await axios.get(`http://localhost:5000/api/v1/user/${id}`, config);
    return result;
  };

  const { isLoading, data, error } = useQuery("detailUser", getData);
  if (isLoading)
    return (
      <div className="flex justify-center">
        <h1 className="text-2xl font-semibold">Loading...</h1>
      </div>
    );
  return (
    <>
      <HeaderPage />
      <ProfileContent posts={data} />
      <Footer />
    </>
  );
}

export default Profile;
