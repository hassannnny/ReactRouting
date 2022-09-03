import React from "react";
import NavBar from './NavBar';



const Profile = () => {
    return (
        <div className="parent">

            <NavBar />  

            <h1 className="title" style={{textAlign: 'center', color: 'white'}}>View your profile</h1>

        </div>
    )
}

export default Profile