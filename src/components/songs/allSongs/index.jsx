import React from 'react'
import cover from '../song_images/220px-Michael_jackson_thriller_12_inch_single_USA.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, ButtonGroup, Table} from 'react-bootstrap';
import Popup from "reactjs-popup";
class AllSongs extends React.Component {

    constructor(props) {
        super();
        this.state = {songs: 
            [{  id: '1', 
                name: 'Thriller',
                price: '1.99',
                artist:'Michael Jackson',
                album: 'Thriller',
                format: 'MP3',
                genre: 'Pop'
               } ]};
        
      }

      async  addToCart(id){
          
      }
    render(){
        const {songs} = this.state;
        return(
            <section>
            <Table className = "container  ">
      <thead>
        <tr>
        <th></th>
          <th>Title</th>
          <th>Price</th>
          <th>Artsit</th>
          <th>Album</th>
          <th>Format</th>
          <th>Genre</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {songs.map(song =>
             <tr key={song.id}> 
             <td> <img src = {cover} width="100" height="100"/></td>
               <td>{song.name}</td>  
               <td>${song.price}</td> 
               <td>{song.artist}</td>
               <td>{song.album}</td>
               <td>{song.format}</td>
               <td>{song.genre}</td>
               <td>
               <ButtonGroup>
                 <Button className="float-right" size="sm" color="primary"  onClick={() => this.addToCart(song.id)}>Add to Cart</Button>
                </ButtonGroup>       
                </td>     
              </tr>
            )}
      </tbody>
    </Table>
            </section>
        )
    }
}

export default AllSongs