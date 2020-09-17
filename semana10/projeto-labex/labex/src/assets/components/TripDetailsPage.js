import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useProtectPage } from "../hooks/useProtectPage";
import {baseUrl} from '../constants/axiosConstants'
import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress';

const All = styled.div`
    max-width: 1024px;
    margin: 24px auto;
    padding: 0 24px;
    text-align: center;
`
const Progress = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 150px;
    height: 82vh;
    
`

function TripDetailsPage() {
  const [trip, setTrips] = useState([null]);


  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token) {
      getTripDetail();
    } else {
      history.push("/");
    }
  }, [history], []);

  const getTripDetail = () => {
    axios
      .get(`${baseUrl}/trip/id`, {
        headers: {
          auth: localStorage.getItem("token")
        }
      })
      .then((response) => {
        console.log(response.data.trip);
        setTrips(response.data.trip.candidates);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  if (trip === undefined) {
    return (
        <Progress>
            <CircularProgress color="secondary" />
        </Progress>
      )
}

  
  return (
    <All>
      {trip.map((details) => {
          return (
              <h3>detalhes</h3>
          )
      })}
    </All>
  );
}

export default TripDetailsPage;