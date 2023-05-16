import React from 'react';
import empty from "../assets/empty-profile.jpeg";
import Ramka from "../assets/profile-image.png";

const Profile = () => {
    return (
        <>
            <header>
                <div className="tb">PROFILE</div>
            </header>
            <div className="prof-main">
                <div className="player-datas">
                    <div className="data">
                        <div className="prof-nickName"></div>
                        <div className="prof-coins"></div>
                        <div className="prof-level"></div>
                        <div className="prof-title"></div>
                    </div>
                    <div className="profile-img" style={{ backgroundImage:`url(${empty})`}}><img src={Ramka} className="ramka"/></div>
                </div>
                <div className="btn-logout">LOGOUT</div>
            </div>
        </>
    );
};

export default Profile;