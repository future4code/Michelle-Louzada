import React from 'react'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import { InputLabel, FormControl } from '@material-ui/core';
import axios from "axios"
import { baseUrl } from "../constants/axiosConstants"
import useForm from '../hooks/useForm'
import { useParams, useHistory } from "react-router-dom";
import { goToTripPage } from '../router/goToPages';

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

const SelectOption = styled(Select)({
    width: "30vw",
})

export default function ApplicationFormPage() {
    const pathParams = useParams();
    const history = useHistory()
    const { form, onChange, resetState } = useForm({
        name: "",
        age: 0,
        profession: "",
        applicationText: "",
        country: "",
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
    
        onChange(name, value);
      };
    
      const handleSubmittion = () => {    
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country,
        }
        axios.post(`${baseUrl}/trips/id/apply`, body)
        .then((response) => {
            alert(`Sua inscrição foi realizada com sucesso!`)
            goToTripPage(history)
        })
        .catch((error) => {
            alert(`Algo de errado não esta certo`)
        })
    
        resetState();
      };


        
    return (
        <div>
            
            <FormDiv container>
                
                <h2>Inscrição</h2>
                <NamesInputField type="text" name="name" variant="outlined" required inputProps={{ pattern: "[A-Za-z]{3,}", }}
                placeholder="Nome" value={form.name} onChange={handleInputChange}   /> 
                
                <InputField type="number" name="age" variant="outlined" required  inputProps={{ type: "number" }}
                placeholder="Idade" value={form.age} onChange={handleInputChange} />
                
                <InputField type="text" name="profession" variant="outlined" required
                placeholder="Profissão" value={form.profession} onChange={handleInputChange} />
                
                <DescriptionInputField type="text" name="applicationText" variant="outlined" 
                multiline rows={10} placeholder={"Conte-nos sua motivação"} value={form.applicationText} 
                onChange={handleInputChange} required />
                
                <FormControl variant="outlined">
                        <InputLabel id="category-label">País</InputLabel>
                        <SelectOption
                            name="country"
                            labelId="country-label"
                            label="contry"
                            required
                            native
                            variant="outlined"
                            value={form.country} 
                            onChange={handleInputChange}
                        >
                            <option value=""/>
                            <option value="instruments">Brasil</option>
                        </SelectOption>  
                    </FormControl>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleSubmittion}
                >
                    Enviar
                </Button>
              
            </FormDiv>
        
        </div>
    )
}