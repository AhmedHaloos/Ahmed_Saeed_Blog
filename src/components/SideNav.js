import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import './SideNavStyle.css'

const SideNavBar = (props) => {

    const navigate = useNavigate();

    console.log(props.currenPage.index);
    return (
        <div className={"sidenav-container " + (props.isSideNavDisp ? "disp-nav" : "hide-nav")}>
            <div className='side-list-container'>
                <ul>
                    <li className='side-list-item-close'><FontAwesomeIcon icon={faClose} id='side-close-icon'
                        onClick={() => { props.handleCloseSideNav() }}
                    /></li>
                    <li className='side-list-item'>
                        <button id='side-link-btn'
                            style={{ color: props.currenPage.index == 0 ? "white" : "gray" }}
                            onClick={() => {
                                props.handleCloseSideNav();
                                navigate('/');
                            }}
                        >Home</button>
                    </li>
                    <li className='side-list-item'>
                        <button id='side-link-btn'
                            style={{ color: props.currenPage.index == 1 ? "white" : "gray" }}
                            onClick={() => {
                                props.handleCloseSideNav();
                                navigate('/users');
                            }}
                        >Users</button>
                    </li>
                    <li className='side-list-item'>
                        <button id='side-link-btn'
                            style={{ color: props.currenPage.index == 2 ? "white" : "gray" }}
                            onClick={() => {
                                props.handleCloseSideNav();
                                navigate('/posts');
                            }}
                        >Posts</button>
                    </li>

                </ul>
            </div>
        </div>
    )
}
export default SideNavBar;