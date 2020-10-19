import React from 'react';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router'
import Header from './components/Header'

const myTheme = createMuiTheme ({
	palette: {
		primary: {
			main: "#121d3b" //azul escuro
		},
		secondary: {
			main: "#f2b425" //amarelo queimado
		}
	}
})

function App() {
  return (
    <MuiThemeProvider theme={myTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MuiThemeProvider>
    
  );
}

export default App;
