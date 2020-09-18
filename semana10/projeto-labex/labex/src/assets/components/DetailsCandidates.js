import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import { useProtectPage } from "../hooks/useProtectPage";
import {baseUrl} from '../constants/axiosConstants'
import axios from 'axios'
import { useHistory, useParams } from "react-router-dom";


const All = styled.div`
    border: solid 1px #EEE9E9;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 10px;
    width: 500px;
`

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function DetailsCandidates(props) {
  const classes = useStyles();
  const params = useParams()

  const decideCandidate = (choice, id) => {
    const body = {
      approve: choice
    }
    axios.put(`${baseUrl}/trips/${params.id}/candidates/${id}/decide`, body, 
    { headers: {
      auth: localStorage.getItem("token")
    }} )
    .then((response) => {
      if(choice === true)  {
        alert(`Candidato(a) ${props.info.name} aprovado com sucesso`)
      }else {
        alert(`Candidato(a) ${props.info.name} reprovado com sucesso`)
      }
    })
    .catch((error) => {
      alert(`Algum erro ocorreu, por favor tente novamente mais tarde.`)
    })
  }
console.log(props.info)
  return (
    <All>
        <List className={classes.root}>
            <ListItem>
                <ListItemText primary={props.info.name} secondary={`Idade: ${props.info.age} / País: ${props.info.country} 
                / Profissão: ${props.info.profession} / Motivação: ${props.info.applicationText}`} />

            </ListItem>
            <Button onClick={() => decideCandidate(true, `${props.info.id}`)} size="small" color="primary"> 
                aprovar
            </Button>
            <Button onClick={() => decideCandidate(false, `${props.info.id}`)} size="small" color="primary">
                reprovar
            </Button>
        </List>
    </All>
  )
}
