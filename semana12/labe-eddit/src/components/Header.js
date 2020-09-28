import React from 'react'
import Logotipo from '../assets/logo.jpg'
import { Logo, All, Container1, Container2, SpanStyled } from './styled'

function Header() {
   return (
            <All>
                <Container1>
                    <Logo 
                        src={Logotipo}
                        onClick=""
                    />
                </Container1>
                <Container2>
                    <SpanStyled
                        onClick=""
                    >
                        Login
                    </SpanStyled>
                    <SpanStyled
                        onClick=""
                    >
                        SignUp
                    </SpanStyled>
                </Container2>
            </All>
        )    
}

export default Header;