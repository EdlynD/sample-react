import React, { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";

import "./Profile.css";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, setUser } = useContext(LoginContext);

  const fullName = `${user.name.firstName}  ${user.name.lastName}`;
  const fullAddress = `${user.address.street} ${user.address.barangay}`;
  return (
    <div className="profile-container">
      <div className="card">
        <div className="img-profile-container">
          <img className="img-profile" src={user.imageSrc} />
        </div>
        <div className="info-container">
          <h3 className="text">
            {fullName}, {user.age}
          </h3>
          <h5 className="text">{fullAddress}</h5>
        </div>
        <div className="button-container">
          <Link to="/profilehelper" className="text">
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
