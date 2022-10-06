
import { faBurger, faHamburger, faNavicon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './headerStyle.css'

function Header(props) {

    // console.log(props.currenPage.title);

    return (
        <div className="header-container">
            <div className='list-container'>
                <ul>
                    <li className='list-item active'><Link to={'/'} >Home</Link></li>
                    <li className='list-item'><Link to={'/users'} >Users</Link></li>
                    <li className='list-item'><Link to={'/posts'} >Posts</Link></li>

                </ul>
            </div>
            {/* <div className='divider'></div> */}
            <div className='header-page-title'><p>{props.currenPage.title}</p></div>
            <div className='page-title'></div>
            <div className='header-icon'
                onClick={() => {
                    props.setNavDisp(!props.isSideNavDisp);
                }
                }
            > <FontAwesomeIcon icon={faNavicon} />
            </div>
        </div>
    )
}
export default Header;