
import { faBurger, faHamburger, faNavicon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './headerStyle.css'

function Header(props) {


    return (
        <div className="header-container">
            
            <div className='list-container'>
                <ul>
                    <li className='list-item'><Link to={'/'} >Home</Link></li>
                    <li className='list-item'><Link to={'/users'} >Users</Link></li>
                    <li className='list-item'><Link to={'/posts'} >Posts</Link></li>

                </ul>
            </div> 
           
            <div className='header-icon'>
                <FontAwesomeIcon icon={faNavicon}/>
            </div>
        </div>
    )
}
export default Header;