import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/containers/404.css';
const NotFound = ()=>{
    return(<div class="error_section">
        <div class="container">   
            <div class="row">
                <div class="col-12">
                    <div class="error_form">
                        <h1>404</h1>
                        <h2>Opps! PAGE NOT BE FOUND</h2>
                        <p>Sorry but the page you are looking for does not exist, have been<br></br> removed, name changed or is temporarily unavailable.</p>
                        <Link to='/'>Back to home page</Link>
                    </div>
                </div>
            </div>
        </div>    
    </div>
)
}
export default NotFound;