import React from "react";
import "./ProfileScreen.css";
import Navbar from "../Navbar";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";

function ProfileScreen() {
    const user = useSelector(selectUser);
  return (
    <div className="profile_screen">
      <Navbar />
      <div className="profile_screen_body">
        <h1>Edit Profile</h1>
        <div className="profile_screen_info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="netflix_logo"
          />
          <div className="profileScreen_details">
          <h2>{user.name}🔥🔥🔥</h2>
          <div className="profile_screens_plains">
          <h2>Welcome To MemberShip</h2>
          <button onClick={()=>auth.signOut()} className="profile_screen_out">Sign Out</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
