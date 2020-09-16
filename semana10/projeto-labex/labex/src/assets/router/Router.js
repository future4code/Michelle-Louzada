import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../components/Home'
import ListTripsPage from '../components/ListTripsPage'
import TripDetailsPage from '../components/TripDetailsPage'
import ApplicationFormPage from '../components/ApplicationFormPage'
import CreateTripPage from '../components/CreateTripPage'
import Login from '../components/Login'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route exact path="/viagens">
            <Header />
            <ListTripsPage />
          </Route>
          <Route exact path="/viagens/:detalhes">
            <Header />
            <TripDetailsPage />
          </Route>
          <Route exact path="/formulario">
            <Header />
            <ApplicationFormPage />
          </Route>
          <Route exact path="/login">
              <Header />
              <Login />
          </Route>
          <Route exact path="/login/criarViagem">
              <Header />
              <CreateTripPage />
          </Route>
          <Route>
              <Header />
              <p>Erro 404</p>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Router;