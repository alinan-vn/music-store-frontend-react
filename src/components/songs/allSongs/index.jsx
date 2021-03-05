import React from 'react'
import cover from '../song_images/220px-Michael_jackson_thriller_12_inch_single_USA.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, ButtonGroup, Table} from 'react-bootstrap';
import Popup from "reactjs-popup";
import axios from 'axios';
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
      componentDidMount(){
        this.setState({isLoading: true});
        axios.get(`http://localhost:8080/api/song`)
        .then(res => {
          const songs = res.data;
          this.setState({songs: songs, isLoading: false });
        })
      }
      

      async  addToCart(song){
        axios.get(`http://localhost:8080/api/shoppingcart/1`)
        .then(res => {
          const shoppingCart = res.data;
          fetch('http://localhost:8080/api/savecartsongitems', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'shoppingCart': shoppingCart,'quantity':1,'song':song})
        }).then(res => {
            console.log(res);
            console.log(res.data);
          });
        })
        
    }
          
      
    render(){
        const {songs} = this.state;
        return(
            <section>
            <Table className = "container  ">
      <thead>
        <tr>
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
               <td>{song.songName}</td>  
               <td>${song.price}</td> 
               <td>{song.artist}</td>
               <td>{song.album.albumName}</td>
               <td>MP3</td>
               <td>{song.genre.id}</td>
               <td>
               <ButtonGroup>
                 <Button className="float-right" size="sm" color="primary"  onClick={() => this.addToCart(song)}>Add to Cart</Button>
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