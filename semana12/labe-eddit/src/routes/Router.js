import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from '../screens/loginPage/LoginPage'
import ErrorPage from '../screens/errorPage/ErrorPage'
import HomePage from '../screens/homePage/HomePage'
import SignUpPage from '../screens/signUpPage/SignUpPage'
import DetailPostPage from '../screens/detailPostPage/DetailPostPage'


const Router = () => {
  return (
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route>
        <Route exact path="/homepage/id">
          <DetailPostPage />
        </Route>
          <ErrorPage />
        </Route>
      </Switch>
  );
};

export default Router;