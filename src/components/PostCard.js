import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import './postCardStyle.css'
import USerInfo from './UserInfo'
const PostCard = (props) => {

    const [postDisplayed, setPostDisplayed] = useState(false);
    
    return (
        <div className='post-container'>
           <USerInfo username={props.post.username}/>
            <button className='post-titel-btn' onClick={() => { setPostDisplayed(!postDisplayed) }}>
             <p>{props.post.title}</p>
            <div className='post-expand'><p>{postDisplayed?"Show Less" : "Show More"}</p> 
            <FontAwesomeIcon icon={postDisplayed?faMinus :faPlus}  color={"#f6ebff"} id="post-btn-icon"/>
            </div>
                
            </button>
            <div className={"post-details " + (postDisplayed ? "display-post" : "hide-post")}>
                <p>{props.post.body}</p>
            </div>
        </div>

    );

}
export default PostCard;