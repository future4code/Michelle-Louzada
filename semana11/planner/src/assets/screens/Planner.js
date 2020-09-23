import React, {useState} from 'react';
import styled from 'styled-components'
import axios from 'axios'

const Header = styled.div`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Section = styled.section`
    display: flex;
    justify-content: space-evenly;
    height: 90vh;
`
const Semana = styled.div`
    border: 1px dotted rgb(53, 53, 53);
    width: 14%;
    padding: 5px;
`
const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-michelle'

function Planner() {
    const [inputValue, setInputValue] = useState("")
    const [selectValue, setSelectValue] = useState("")

const onChangeInput = (event) => {
    setInputValue(event.target.value)
}
const onChangeSelect = (event) => {
    setSelectValue(event.target.value)
}

const createTask = () => {
    const body = {
        text: inputValue,
        day: selectValue
    }
    axios.post(baseUrl, body)

    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
}


  return (
    <div>
        <Header>
            <label for="tarefa">Nova tarefa:</label>
            <input type="text" id="tarefa" value={inputValue} onChange={onChangeInput} />
            <select onChange={onChangeSelect}>
                <option value="domingo">Domingo</option>
                <option value="segunda">Segunda-feira</option>
                <option value="terca">Terça-feira</option>
                <option value="quarta">Quarta-feira</option>
                <option value="quinta">Quinta-feira</option>
                <option value="sexta">Sexta-feira</option>
                <option value="sabado">Sábado</option>
            </select>
            <button id="button" onClick={createTask}>Criar tarefa</button>
        </Header>
        
        
        <Section>
            <Semana>
                <h3>Domingo</h3>
                <div id="domingo"></div>
            </Semana>

            <Semana>
                <h3>Segunda-feira</h3>
                <div id="segunda"></div>
            </Semana>

            <Semana>
                <h3>Terça-feira</h3>
                <div id="terca"></div>
            </Semana>
    
            <Semana>
                <h3>Quarta-feira</h3>
                <div id="quarta"></div>
            </Semana>
    
            <Semana>
                <h3>Quinta-feira</h3>
                <div id="quinta"></div>
            </Semana>

            <Semana>                    
                <h3>Sexta-feira</h3>               
                <div id="sexta"></div>
            </Semana>

            <Semana>
                <h3>Sábado</h3>
                <div id="sabado"></div>
            </Semana>
        </Section>
    </div>
  )
}

export default Planner;
