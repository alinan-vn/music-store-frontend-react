import React from 'react'
import './index.css'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

class SongInventory extends React.Component {
    constructor(){
        super()
        this.state = {
            SongData: [
                {
                    id: 1,
                    name: 'Song 1',
                    description: 'the Strokes',
                    price: .99,
                    genre: 'Rock',
                },
                {
                    id: 2,
                    name: 'Song 2',
                    description: 'Vulfpeck',
                    price: 2.99,
                    genre: 'Funk',
                },
                {
                    id: 3,
                    name: 'Song 3',
                    description: 'Cory Wong',
                    price: 3.99,
                    genre: 'Pop Funk',
                },
                {
                    id: 4,
                    name: 'Song 4',
                    description: 'the Fearless Flyers',
                    price: 5.99,
                    genre: 'Jazz Funk',
                }
            ]
        }
    }

    getSongDataCards = () => {
        return this.state.SongData.map(song => {
            return(
                <tr>
                    <td className='song-inventory__'>{song.name}</td>
                    <td className='song-inventory__'>{this.trimDescription(song.description)}</td>
                    <td className='song-inventory__'>{song.price}</td>
                    <td className='song-inventory__'>{song.genre}</td>
                    <td className='song-inventory__'><Button onClick={this.editSong} id={song.id} name={song.name}>Edit</Button></td>
                    <td className='song-inventory__'><Button onClick={this.deleteSong} id={song.id} name={song.name}>Delete</Button></td>
                </tr>
            )
        })
    }

    trimDescription = description => {
        let descrArray = description.split(' ')
        let newDescArray = []
        for(let i = 0; i < 5; i++){
            newDescArray[i] = descrArray[i]
        }
        let finalDescription = newDescArray.join(' ')
        return finalDescription
    }

    editSong = e => {
        alert(`${e.target.name} Will be edited`)
    }

    deleteSong = e => {
        alert(`${e.target.name} Will be deleted`)
    }

    render(){
        return(
            <section>
                <div className='song-inventory__header'>
                    <h3>Song Inventory</h3>
                </div>
                <div className='song-inventory__table'>
                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th className='song-inventory__'>Song</th>
                                <th className='song-inventory__'>Artist</th>
                                <th className='song-inventory__'>Price</th>
                                <th className='song-inventory__'>Genre</th>
                                <th className='song-inventory__'>Edit</th>
                                <th className='song-inventory__'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.getSongDataCards()}
                        </tbody>
                    </Table>
                </div>
            </section>
        )
    }
}

export default SongInventory