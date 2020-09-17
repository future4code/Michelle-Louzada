import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Styled from 'styled-components'
import useRequestData from '../hooks/useRequestData'
import { baseUrl } from '../constants/axiosConstants'
import { useHistory, useParams } from "react-router-dom";
import { goToFormPage, goToDetailPage } from '../router/goToPages'
import { styled } from '@material-ui/styles'
import CircularProgress from '@material-ui/core/CircularProgress';

const All = Styled.div`
    max-width: 1024px;
    margin: 24px auto;
    padding: 0 24px;
    text-align: center;
`
const Progress = Styled.div`
    display: flex;
    justify-content: center;
    margin-top: 150px;
    height: 82vh;
    
`
const ProductsListContainer= Styled.div`
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1em;
`
const Cardd = styled(Card)({
    width: "400px",
})
const Buttonn = styled(Button)({
    display: "flex",
    justifyContent: "center"
})

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
});

export default function ListTripsPage() {
    const history = useHistory();
    const classes = useStyles();
    const [trips, setTrips] = useRequestData(
    `${baseUrl}/trips`,
    []
  );
  
//   if (trips === undefined) {
//     return (
//         <Progress>
//             <CircularProgress color="secondary" />
//         </Progress>
//       )
// }

  return (
    <All>
        <h2>Viagens</h2>
        {trips.map((trip) => {
             const idTrip = trip.id
            return (
                <ProductsListContainer>
                    <Cardd className={classes.root}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {trip.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <h4>planeta: {trip.planet}</h4> <h4>data: {trip.date}</h4>
                                    <h4>duração: {trip.durationInDays}</h4>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {trip.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Buttonn onClick={() => goToFormPage(history, trip.id)} size="small" color="primary">
                                Inscrever-se
                             </Buttonn>
                             <Buttonn onClick={() => goToDetailPage(history, trip.id)} size="small" color="primary">
                                detalhes
                             </Buttonn>
                        </CardActions>
                    </Cardd>
                </ProductsListContainer>
            )
        })}
    </All>
  );
}