import React from 'react'
import {
    Card, Button
  } from 'react-bootstrap';

class SongDetail extends React.Component {

    constructor(props){
        super();
        this.state = {song: 
            {  id: '1', 
                name: 'Thriller',
                price: '1.99',
                artist:'Michael Jackson',
                album: 'Thriller',
                format: 'MP3',
                genre: 'Pop'
               }};
        }
    

    componentDidMount(){

    }


    render(){
        const {song} = this.state;
        return(
           
            <section>
                    <div>
      <Card>
        <Card.Img top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <Card.Body>
          <Card.Title tag="h5">{song.title}</Card.Title>
          <Card.Subtitle tag="h6" className="mb-2 text-muted">Card subtitle</Card.Subtitle>
          <Card.Text>
              
          </Card.Text>
          <Button>Add to cart</Button>
        </Card.Body>
      </Card>
    </div>
            </section>
        )
    }
}

export default SongDetail