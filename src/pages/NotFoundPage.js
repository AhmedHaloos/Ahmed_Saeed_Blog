import React, {useEffect} from 'react';

import './NotFoundPageStyle.css'


function NotFoundPage(props) {

    useEffect(()=>{
         if(props.setCurrentPage != undefined){

             props.setCurrentPage({title : "Not Found Page", index : 3});
         }   
    }, [])
    return (
        <div className='notfound-container'>
            <div className='error-404 box-gradient'>404</div>
            <div className='error-message'>this page is not available</div>
        </div>
    )
}



export default NotFoundPage