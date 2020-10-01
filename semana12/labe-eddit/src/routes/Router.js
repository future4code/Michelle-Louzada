import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from '../screens/loginPage/LoginPage'
import ErrorPage from '../screens/errorPage/ErrorPage'
import SignUpPage from '../screens/signUpPage/SignUpPage'
import DetailPostPage from '../screens/detailPostPage/DetailPostPage'
import Header from '../components/Header'
import HomePage from '../screens/homePage/HomePage'


const Router = () => {
  return (
      <Switch>
        <Route exact path="/login">
        <Header />
          <LoginPage />
        </Route>
        <Route exact path="/signup">
        <Header />
          <SignUpPage />
        </Route>
        <Route exact path={['/posts', '/' ]}>
        <Header />
          <HomePage />
        </Route>
        <Route>
        <Route exact path="/homepage/id">
        <Header />
          <DetailPostPage />
        </Route>
          <ErrorPage />
        </Route>
      </Switch>
  );
};

export default Router;