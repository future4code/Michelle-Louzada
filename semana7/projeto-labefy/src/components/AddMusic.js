import React from 'react';
import axios from 'axios'
import { axiosConfig } from "../constants/axiosConstants";

export default class AddMusic extends React.Component {
    state = {
        nameMusic: "",
        nameArtist: "",
        url: "",
    }
    createMusic = (id) => {
        const body = {
            name: this.state.nameMusic,
            artist: this.state.nameArtist,
            url: this.state.url
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
        body, axiosConfig )
        .then((response) =>{
            alert(`Música adicionada com sucesso!`)
            this.setState({
                nameMusic: "",
                nameArtist: "",
                url: "",
            })
        })
        .catch((error) => {
            
        })
    }
    onChangeNameArtist = (event) =>{
        this.setState({
            nameArtist: event.target.value
        })
    }
    onChangeNameMusic = (event) =>{
        this.setState({
            nameMusic: event.target.value
        })
    }
    onChangeUrl = (event) =>{
        this.setState({
            url: event.target.value
        })
    }
    
    render() {
        return (
            <div>
                <input onChange={this.onChangeNameArtist} placeholder="Nome do Artista"/>
                <input onChange={this.onChangeNameMusic} placeholder="Nome da Música"/>
                <input onChange={this.onChangeUrl} placeholder="URL da Música"/>
                <button onClick={() => this.createMusic(this.props.idPlaylist)}>Adicionar</button>
                {this.createMusic(this.props.idPlaylist)}
            </div>
        )
    }
}