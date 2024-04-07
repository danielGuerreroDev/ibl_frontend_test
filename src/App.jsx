import React, { useEffect, useState } from "react";
import Axios from "axios";
import { api } from "./urls";
import BaseContainer from "./components/MainContainer";
import Profile from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [width, setWidth] = useState(0);

  const getUserData = () => {
    Axios.get(api).then((res) => {
      setUserData(res.data.results);
    });
  };

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    getUserData();
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <>
      <BaseContainer component={<Profile data={userData} width={width} />} />
    </>
  );
};

export default App;
