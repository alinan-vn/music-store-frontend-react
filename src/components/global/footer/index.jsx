import React from 'react'

import './index.css';

class Footer extends React.Component {

    render(){
        return(
            <footer>
                <hr />
                <div className='footer'>
                    <p>Music Store 2020&#169;</p>
                    <p className='footer__admin-login'><a href="/admin/login">Admin Login</a></p>
                </div>
                <hr />
            </footer>
        )
    }
}

export default Footer