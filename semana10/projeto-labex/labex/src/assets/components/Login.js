import React from "react"; 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Styled from 'styled-components'
import { useState } from 'react'
import axios from 'axios'
import {baseUrl} from '../constants/axiosConstants'


const FormDiv = styled(Grid)({
    display: "grid",
    gap: "1em",
    alignItems: "center",
    justifyItems: "center",
    width: "100vw",
    marginBottom: "50px",
    marginTop: "100px;"
})

const InputField = styled(TextField)({
    width: "18vw",
})
const Buttonn = styled(Button)({
    width: "150px",
    marginTop: "30px"
})

const Cadastrar = Styled.span`
    text-decoration: underline;
    &:hover {
        color: #4169E1;
    } 
`

const useInput = () => {
    const [value, setValue] = useState("");
  
    const handleValue = (event) => {
      setValue(event.target.value);
    };
  
    return [value, handleValue];
  };


export default function Login() {
    const [email, changeEmail ] = useInput();
    const [password, changePassword ] = useInput();

    const login = () => {
        const body = {
            email: email,
            password: password
        }
        axios.post(`${baseUrl}/login`, body)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error.messege)
        })
    }
    console.log(email, password)

    return (
        <div>
            <FormDiv container>
                    <h2>Login/Entrar</h2>
                    <InputField type="text" name="email" variant="outlined" 
                        placeholder="Email" value={email} onChange={changeEmail} />
                    <InputField type="password" name="Password" variant="outlined" 
                        placeholder="Password" value={password} onChange={changePassword} />
                    <Buttonn 
                        variant="contained" 
                        color="primary" 
                        onClick={login}
                    >
                        entrar
                    </Buttonn>
                    <p>Caso não tenha cadastro clique em <Cadastrar>cadastrar</Cadastrar></p>
                </FormDiv>
            
        </div>
    )
}