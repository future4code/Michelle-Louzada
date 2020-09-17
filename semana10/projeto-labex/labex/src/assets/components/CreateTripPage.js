import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useProtectPage } from "../hooks/useProtectPage"
import {baseUrl} from '../constants/axiosConstants'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import useForm from '../hooks/useForm'
import { useState, useEffect } from 'react'

const FormDiv = styled(Grid)({
    display: "grid",
    gap: "1em",
    alignItems: "center",
    justifyItems: "center",
    width: "100vw",
    marginBottom: "50px"
})

const InputField = styled(TextField)({
    width: "30vw",
})

const NamesInputField = styled(TextField)({
    width: "30vw",
})

const DescriptionInputField = styled(TextField)({
    width: "30vw",
})



export default function CreateTripPage() {
    const history = useHistory();

    useEffect(() => {
        const token = window.localStorage.getItem("token");
    
        if (token) {
          createTrip();
        } else {
          history.push("/login");
        }
      }, [history]);

    const { form, onChange, resetState } = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: "",
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
    
        onChange(name, value);
      };
    
      const createTrip = () => {    
        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.durationInDays,
        }
        axios.post(`${baseUrl}/trips`, {
            headers: {
              auth: localStorage.getItem("token")
            }
          }, body)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
           console.log(error)
        })
    
        resetState();
      };

    return (
        <form noValidate autoComplete="off">
        <FormDiv container>
            <h2>Inscrição</h2>
            <NamesInputField type="text" name="name" variant="outlined" required inputProps={{ pattern: "[A-Za-z]{3,}" }}
            placeholder="Nome da Viagem" value={form.name} helperText="Incorrect entry." onChange={handleInputChange} />
            
            <InputField type="text" name="planet" variant="outlined" required 
            placeholder="planeta" value={form.planet} onChange={handleInputChange} />
            
            <InputField type="text" name="date" variant="outlined" required
            placeholder="data" value={form.date} onChange={handleInputChange} />
            
            <DescriptionInputField type="text" name="description" variant="outlined" 
            multiline rows={10} placeholder={"descrição"} value={form.description} 
            onChange={handleInputChange} required />
            
            <InputField type="number" name="durationInDays" variant="outlined" required
            placeholder="duração em dias" value={form.durationInDays} onChange={handleInputChange} />
            
            <Button 
                variant="contained" 
                color="primary" 
                onClick=""
            >
                Enviar
            </Button>
        </FormDiv>
    </form>
    )
}