import React, { useState } from "react";
import { LoginContext } from "./Components/Context/LoginContext";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import { Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import About from "./Components/About/About";
import Documentation from "./Components/Documentation/Documentation";
import ProfileHelper from "./Components/ProfileHelper/ProfileHelper";

const App = () => {
  //scripts
  const [isLogin, setLogin] = useState(true);
  const [user, setUser] = useState({
    imageSrc:
      "https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/289163028_5633360703365346_2927719600878661367_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHpg-mOmZM6MB_1ql5QC9r2wjIt0xNQaDbCMi3TE1BoNgHS6e7Q5AZTkk0Yhb-u6c7sKfEomuC5AkFGm4Klb3XH&_nc_ohc=ProLTrIcHIIAX9cKdYq&_nc_ht=scontent.fcrk1-4.fna&oh=00_AT-ZVyR62RP1hn0RAfbFesVZIk7W2GbxAZshgJorl2nGwA&oe=62DE87F3",
    name: { firstName: "Edlyn", lastName: "David" },
    age: 22,
    address: { street: "Latondan", barangay: "Saguin", isPresent: true },
    school: "Don Honorio Ventura State University",
  });

  return (
    <LoginContext.Provider value={{ isLogin, setLogin, user, setUser }}>
      {!isLogin ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/profilehelper" element={<ProfileHelper />} />
          </Routes>
        </>
      )}
    </LoginContext.Provider>
  );
};

export default App;
