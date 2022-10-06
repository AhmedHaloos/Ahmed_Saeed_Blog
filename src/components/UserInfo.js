import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import './UserInfoStyle.css'
const USerInfo = ({ username }) => {

    return (
        <div className="profile-body">

            <img src={require('./../resources/images/user-profile.webp')} />
            <p> {username}</p>
            <div className='divider'></div>
        </div>
    )

}
export default USerInfo;