import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Button, ButtonGroup, Table} from 'react-bootstrap';
import axios from 'axios';

class SongsBySelectedGenre extends React.Component {
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
               },
               {id: '2', 
               name: 'Savage',
               price: '1.99',
               artist:'Megan Thee Stallion',
               album: 'Suga',
               format: 'MP3',
               genre: 'hiphop'},
            
                {id: '3', 
                name: 'Laugh Now Cry Later',
                price: '1.99',
                artist:'Drake',
                album: 'N/A',
                format: 'MP3',
                genre: 'hiphop'},
                {id: '4', 
                name: 'Rockstar ',
                price: '1.99',
                artist:'DaBaby',
                album: 'Blame it on Baby',
                format: 'MP3',
                genre: 'hiphop'}],
                genre: ''};
        
      }
      async componentDidMount() {
        this.setState({isLoading: true});
        var genre = this.props.match.params.genre;
        if (genre == null) 
            this.props.history.push("./")
        else{
            this.setState({genre: genre})
         }
        
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
        const {songs, genre} = this.state;
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
      {songs.filter(function(song){ return song.genre.genreName == genre;}).map(song =>
             <tr key={song.id}> 
             <td> </td>
               <td>{song.songName}</td>  
               <td>${song.price}</td> 
               <td>{song.artist}</td>
               <td>{song.album.albumName}</td>
               <td>MP3</td>
               <td>{song.genre.genreName}</td>
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

export default SongsBySelectedGenre