import React from "react";
import HeaderPage from "../components/HeaderPage";
import Footer from "../components/Footer";
import ProfileContent from "../components/ProfileContent";
import { useQuery } from "react-query";
import axios from "axios";

function Profile() {
  const { userId, token } = localStorage;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const getData = async () => {
    const result = await axios.get(`https://backend-dewetour.herokuapp.com/api/v1/user/${userId}`, config);
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
