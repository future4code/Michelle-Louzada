import React from 'react';
import axios from 'axios'
import { axiosConfig } from "../constants/axiosConstants"

export default class Playlist extends React.Component {
    state = {
        playlist: []
    }
    infoPlaylist = (id) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
        axiosConfig )

        .then((response) => {
            this.setState({
                playlist: response.data.result.tracks
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
    render() {
        console.log(this.state.playlist)
        return(
            <div>
                {this.state.playlist.map((music) => {
                    return(
                         <div>
                            <p key={music.id}>{music.name}</p>
                            <audio autoplay="autoplay" controls="controls">
                            <source src={music.url} type="audio/mp3" />
                            </audio>
                        </div>
                    )
                                
                    })}
            </div>
        )
    }
}