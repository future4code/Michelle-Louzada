import React from 'react';
import logoDois from '../../assets/logo2.jpg'
import { Cadastrar, ImgLogo, FormDiv } from './styled'
import LoginForm from './LoginForm'
import { useHistory } from 'react-router-dom'
import useUnprotectedPage from '../../hooks/useUnprotectPage'
import { goToSignUpPage } from '../../routes/goToPage'

function LoginPage() {
  useUnprotectedPage()
  const history = useHistory()

  return (
    <FormDiv>
        <ImgLogo src={logoDois} />  
        <LoginForm />
               <p>Caso não tenha cadastro clique em <Cadastrar onClick={() => goToSignUpPage(history)}>cadastrar</Cadastrar></p>
    </FormDiv>
  );
}

export default LoginPage;
