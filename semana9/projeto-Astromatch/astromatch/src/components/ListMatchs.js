import React from 'react';
import styled from 'styled-components'
import { useState, useEffect } from "react";
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton'
import MoodBadIcon from '@material-ui/icons/MoodBad';

const Progress = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 150px;
    
`
const Icon = styled.div`
    margin: 15px;
    display: flex;
    justify-content: center;
`
const ListClear = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
      },
      inline: {
        display: 'inline',
      },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));

export default function ListMatchs () {
    const classes = useStyles();
    const [listMatch, setListMatch] = useState([])
    const [listClear, setListClear] = useState(true)

    useEffect(() => {
        getList();
      }, [])

      const getList = () => {
          axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches")
          
          .then((response) => {
              setListMatch(response.data.matches)
              if(listMatch.length > 1) {
                  setListClear(false)
              }
              console.log(listMatch)
          })
          .catch((error) => {
              console.log(error)
          })
      }

      const clearMatchs = () => {
          axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear")

          .then((response) => {
              alert(`Lista deletada com sucesso`)
              getList()
          })
          .catch((error) => {
              console.log(error)
          })
      }
      
      if (listMatch === undefined) {
        return (
            <Progress>
                <CircularProgress color="secondary" />
            </Progress>
          )
    }
    if (listClear === true) {
        return (
            <ListClear>
                <MoodBadIcon color="secondary"  style={{ fontSize: 200 }} />
                <h3>Lista de matchs vazia</h3>
            </ListClear>
        )
    }
    
    return (
        <div>
            {listMatch.map((person) => {
                return (
                    <List className={classes.root}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={person.photo}   />
                            </ListItemAvatar>
                            <ListItemText
                                primary={person.name}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                      
                                        </Typography >
                                            {` Ultima mensagem `}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </List>
                )
            })}
            <Icon>
                <IconButton aria-label="Delete" >
                    <DeleteIcon onClick={clearMatchs} color="primary" fontSize="large" />
                </IconButton>
            </Icon>
        </div>
    )
}