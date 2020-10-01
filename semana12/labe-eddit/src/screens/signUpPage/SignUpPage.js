import React from 'react'
import logoDois from '../../assets/logo2.jpg'
import { ScreenContainer } from './styled'
import SignUpForm from './SingUpForm'
import useUnprotectedPage from '../../hooks/useUnprotectPage'
import { LogoImage } from './styled'

const SignUpPage = (props) => {
  useUnprotectedPage()
  return (
    <ScreenContainer>
      <LogoImage alt={'logo'} src={logoDois}/>
      <SignUpForm />
    </ScreenContainer>
  )
}

export default SignUpPage