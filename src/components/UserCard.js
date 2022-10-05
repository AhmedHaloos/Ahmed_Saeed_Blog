import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import { faEnvelope, faGlobe, faLocation, faLocationPin, faMap, faNetworkWired, faPhone } from '@fortawesome/free-solid-svg-icons';

import  './userCardStyle.css'
import profile from './../resources/images/user-profile.webp'
import { useQueries, useQuery } from 'react-query';
import { getUserPosts } from '../api/api';
import { useNavigate } from 'react-router-dom';
const UserCard = (props)=>{


    const navigate = useNavigate();

    return (
        
           
        <div  className='container'  >
            <img src = {profile} className = 'avatar' alt = "Profile image"/>
            <p className='name'>{props.user.name}</p>
            <p className='username'>{props.user.username}</p>

            <div className='email icon'>
            <FontAwesomeIcon icon={faEnvelope}/>
            <p>{props.user.email}</p>
            </div>

            <div className='phone icon'>
            <FontAwesomeIcon icon={faPhone}/>
                <p>{props.user.phone}</p>
            </div>
            
            <div className='website icon'>
                <FontAwesomeIcon icon={faGlobe}/>
                <p>{props.user.website}</p>
            </div>

            <div className='address icon'>
                <FontAwesomeIcon icon={faLocationPin}/>
                <p>{`${props.user.address.street}, ${props.user.address.city}`}</p>
            </div>

            <div className='companyName'> 
            <p>{props.user.company.name}</p></div>
            <button onClick={()=>{
                    navigate(`/users/${props.user.id}/posts`);
            
            }} className='postsBtn' >{"Posts"}</button>
        </div>
       
    );
}

export default  UserCard;