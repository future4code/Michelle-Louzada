import React from 'react';
import axios from 'axios'
import { axiosConfig } from "../constants/axiosConstants";

export default class AddPlaylist extends React.Component {
    state = {
        namePlaylist: ""
    }

createName = (event) => {
    this.setState({
        namePlaylist: event.target.value
    })
}

createPlaylist = () => {
    const body = {
        name: this.state.namePlaylist
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
    body, axiosConfig )
    .then((response) => {
        alert(`Playlist ${this.state.namePlaylist} criada com sucesso`)
        this.setState({namePlaylist: ""})
    })
    .catch((error) => {
        console.log(error)
    })
}
    render() {
    
        return (
            <div>
                <h2>CRIAR PLAYLIST</h2>
                <span>Nome: </span>
                <input onChange={this.createName} value={this.state.namePlaylist} />
                <button onClick={this.createPlaylist}>Criar!</button>
                <h4 onClick={this.props.onClickListPage}>Acesse suas Playlists aqui!</h4>
            </div>
        )
    }
}