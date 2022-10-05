import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRightLong} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import './postCardStyle.css'

const PostCard = (props) => {

    const [postDisplayed, setPostDisplayed] = useState(false);
    
    return (
        <div className='post-container'>
            <button className='post-titel-btn' onClick={() => { setPostDisplayed(!postDisplayed) }}>
                
             <p>{props.post.title}</p>
           {/* <FontAwesomeIcon icon={faArrowRightLong} color={"white"} fontSize="0.8rem" className='show-more-icon'/> */}
            </button>
            <div className={"post-details " + (postDisplayed ? "display-post" : "hide-post")}>
                <p>{props.post.body}</p>
            </div>
        </div>

    );

}
export default PostCard;