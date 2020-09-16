import React from 'react';
import Header from './assets/components/Header'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"
import Home from './assets/components/Home'
import Router from './assets/router/Router'

const myTheme = createMuiTheme ({
	palette: {
		primary: {
			main: "#4169E1" // azul royal
		},
		secondary: {
			main: "#551A8B" // roxo escuro
		}
	}
})


function App() {
  return (
      <MuiThemeProvider theme={myTheme}>
        <Header />
        <Router />
      </MuiThemeProvider>
  );
}

export default App;
