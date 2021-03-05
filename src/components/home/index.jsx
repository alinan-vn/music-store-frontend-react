import React from 'react'
import homeimage from '../home/images/home-image.jpg';
import 'bootstrap/dist/css/bootstrap.css';

class Home extends React.Component {

    render(){
        return(
           
            <section className='home'>
                 <h1 className = "display-1"> Welcome to Our Music Store! </h1>
                <img src = {homeimage} style ={{width: 100 + '%' ,height: 10 + '%'}} />
                
            </section>
        )
    }
}

export default Home