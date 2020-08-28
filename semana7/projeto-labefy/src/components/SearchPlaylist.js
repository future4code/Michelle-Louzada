import React from 'react';
import axios from 'axios'
import { axiosConfig } from "../constants/axiosConstants";
import Playlist from './Playlist'
import { infoPlaylist } from './Playlist'

export default class SearchPlaylist extends React.Component {
    state = {
        allPlaylists: [],
        info: false,
    }
    deletPlaylist = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
        axiosConfig )

        .then((response) => {
            alert(`Usuario deletado com sucesso!`)
            this.allPlaylists()
        })
        .catch((error) => {
            console.log(error)
        })

    }

    allPlaylists = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        axiosConfig )

        .then((response) => {
            this.setState({
                allPlaylists: response.data.result.list
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
    onClickInfo = () => {
        this.setState({info: !this.state.info})
    }
    
    componentDidMount = () => {
        this.allPlaylists()
    }
    render() {
        const pageInfo = () => {
            if (this.state.info){
                return <Playlist />
            }
        }
        console.log(this.state.info)
        return (
            <div>
                <h2>TODAS AS PLAYLISTS</h2>
                {this.state.allPlaylists.map((list) => {
                    return (
                        <div>
                            <h4 key={list.id}>{list.name}</h4>
                            <button onClick={() => { if (window.confirm(`Tem certeza de que deseja deletar ${list.name}?`)) this.deletPlaylist(list.id) }}>Deletar</button>
                            <button onClick={this.onClickInfo}>info +</button> 
                            {pageInfo()}
                        </div>
                    )
                })}
                <h4 onClick={this.props.onClickCreatePage}>Voltar</h4>
            </div>
        )
    }
}