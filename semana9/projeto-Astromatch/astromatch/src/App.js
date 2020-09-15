import React from 'react';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"
import Header from './components/Header'
import Match from './components/Match'
import ListMatchs from './components/ListMatchs'
import { useState, useEffect } from "react";
import Footer from './components/Footer'

const myTheme = createMuiTheme ({
	palette: {
		primary: {
			main: "#e91e63" // rosa
		},
		secondary: {
			main: "#f06f5c" // cor Logo
		}
	}
})

function App() {
	const [pageMatch, setPageMatch] = useState(true)
	const [pageList, setPageList] = useState(false)

	const renderPage = () => {
		if(pageMatch === true){
			return (
				<Match />
			)
		}
		if(pageList === true) {
			return (
				<ListMatchs />
			)
		}
	}
	const onClickList = () => {
		setPageMatch(false)
		setPageList(true)
	}
	const onClickMatch = () => {
		setPageMatch(true)
		setPageList(false)
	}
  return (
    <MuiThemeProvider theme={myTheme}>
      <Header onClickList={onClickList} onClickMatch={onClickMatch}/>
	  {renderPage()} 
	  <Footer />
    </MuiThemeProvider>
  )
    
}

export default App;
