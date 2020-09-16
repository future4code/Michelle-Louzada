import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../components/Home'
import ListTripsPage from '../components/ListTripsPage'
import TripDetailsPage from '../components/TripDetailsPage'
import ApplicationFormPage from '../components/ApplicationFormPage'
import CreateTripPage from '../components/CreateTripPage'
import Login from '../components/Login'

const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/viagens">
            <ListTripsPage />
          </Route>
          <Route exact path="/viagens/:detalhes">
            <TripDetailsPage />
          </Route>
          <Route exact path="/viagens/:detalhes/:formulario">
            <ApplicationFormPage />
          </Route>
          <Route exact path="/login">
              <Login />
          </Route>
          <Route exact path="/login/criarViagem">
              <CreateTripPage />
          </Route>
          <Route>
              <p>Erro 404</p>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Router;