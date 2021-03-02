import React from 'react'

class Home extends React.Component {

    render(){
        return(
            <section className='home'>
                <img src={require('./images/home-image.jpg')} alt='item' placeholder='home image' />
            </section>
        )
    }
}

export default Home