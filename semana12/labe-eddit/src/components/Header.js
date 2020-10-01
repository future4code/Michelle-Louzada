import React from 'react'
import Logotipo from '../assets/logo.jpg'
import { Logo, All, Container1, Container2, SpanStyled } from './styled'
import { goToHomePage, goToSignUpPage, goToLoginPage, deletToken } from '../routes/goToPage'
import { useHistory } from 'react-router-dom'

function Header() {
    const history = useHistory()

   return (
            <All>
                <Container1>
                    <Logo 
                        src={Logotipo}
                        onClick={() => goToHomePage(history)} 
                    />
                </Container1>
                <Container2>
                    {localStorage.getItem("token") ? <SpanStyled>Bem vindo(a) Michelle!</SpanStyled> : <p></p>}
                    {localStorage.getItem("token") ?  <SpanStyled onClick={() => deletToken(history)}> Logout </SpanStyled> 
                    : <SpanStyled onClick={() => goToLoginPage(history)} >Login </SpanStyled>}
                    {localStorage.getItem("token") ?  <p></p> 
                    : <SpanStyled onClick={() => goToSignUpPage(history)} >SignUp </SpanStyled>}
                </Container2>
            </All>
        )    
}

export default Header;