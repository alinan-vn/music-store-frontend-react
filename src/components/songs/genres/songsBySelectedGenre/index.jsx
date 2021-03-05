import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Button, ButtonGroup, Table} from 'react-bootstrap';

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
        var genre = this.props.match.params.genre;
        if (genre == null) 
            this.props.history.push("./")
        else{
            this.setState({genre: genre})
         }
        }

      async  addToCart(id){
          
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
      {songs.filter(function(song){ return song.genre == genre;}).map(song =>
             <tr key={song.id}> 
             <td> </td>
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

export default SongsBySelectedGenre