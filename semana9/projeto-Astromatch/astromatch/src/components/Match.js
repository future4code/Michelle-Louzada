import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { red } from '@material-ui/core/colors'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import { useState, useEffect } from "react";
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress';
import Slide from '@material-ui/core/Slide';

const Icon = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`
const All = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
    
    @media(min-width: 800px) {
        border: 1px solid #EEE9E9;
        width: 400px;
        height: 780px;
        margin-left: 40vw;
        align-items: center;
    }
`
const Progress = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 150px;
    height: 82vh;
    
`
const useStyles = makeStyles((theme) => ({
    root: {
    maxWidth: 345,
    maxHeight: 600,
    },
  }));

export default function ImgMediaCard() {
    const [person, setPerson] = useState(null)
    const classes = useStyles();
    const [idPerson, setIdPerson] = useState("")

    useEffect(() => {
        getPerson();
      }, []);

      const getPerson = () => {
          axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/michelle/person")
          
          .then((response) => {
              setPerson(response.data.profile)
              setIdPerson(response.data.profile.id)
          })
          .catch((error) => {
              return <p>Não há mais pessoas para dar Match</p> 
          })
      }
      const getLike = (choice) => {
          const body = {
              id: idPerson,
              choice: choice
          }
          axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/michelle/choose-person",
            body )

            .then((response) => {
                getPerson()
            })
            .catch((error) => {
                alert(`Erro ao dar match`)
            })
      }
      

      if (person === null) {
          return (
            <Progress>
                <CircularProgress color="secondary" />
            </Progress>
          )
          
      }
  return (
        <All>    
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="390"
                        image={person.photo}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {person.name}, {person.age}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {person.bio}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Icon>
                        <IconButton aria-label="deslike" onClick={() => getLike(false)} >
                            <ThumbDownIcon  style={{ color: red[700], fontSize: 50 }} />
                        </IconButton>
                        <IconButton aria-label="like" onClick={() => getLike(true)}>
                            <FavoriteIcon style={{ fontSize: 50 }} color="primary" />
                        </IconButton>
                        
                    </Icon>
                </CardActions>
             </Card>
                     
        </All>
  );
}