import React, {useState, useEffect} from 'react';
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
    const [writeTask, setWriteTask] = useState("")
    const [selectValue, setSelectValue] = useState("")
    const [tasks, setTasks] = useState([])

const onChangeInput = (event) => {
    setInputValue(event.target.value)
    setWriteTask(inputValue)
}
const onChangeSelect = (event) => {
    setSelectValue(event.target.value)
}

const createTask = () => {
    const body = {
        text: writeTask,
        day: selectValue
    }
    axios.post(baseUrl, body)

    .then((response) => {
        getTask()
        setInputValue("")
    })
    .catch((error) => {
        console.log(error)
    })
}

const getTask = () => {
    axios.get(baseUrl) .then((response) => {
        setTasks(response.data)
    })
    .catch((error) => {
        console.log(error)
    })

}

const deleteTask = (id) => {
    axios.delete(`${baseUrl}/${id}`) .then((response) => {
        getTask()
    })
    .catch((error) => {
        console.log(error)
    })

}
useEffect(() => {
    getTask();
  }, []);

const taskDay = (day) => {
    const renderDay = tasks.map((task) => {
        if (task.day === day) {
            return (
                <div>
                    <p>
                        {task.text}{" "}
                        <button onClick={() => deleteTask(task.id)}>deletar</button>
                    </p>
                </div>
            )
        }
    })
     return renderDay
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
                {taskDay("domingo")}
            </Semana>

            <Semana>
                <h3>Segunda-feira</h3>
                {taskDay("segunda")}
            </Semana>

            <Semana>
                <h3>Terça-feira</h3>
                {taskDay("terça")}
            </Semana>
    
            <Semana>
                <h3>Quarta-feira</h3>
                {taskDay("quarta")}
            </Semana>
    
            <Semana>
                <h3>Quinta-feira</h3>
                {taskDay("quinta")}
            </Semana>

            <Semana>                    
                <h3>Sexta-feira</h3>               
                {taskDay("sexta")}
            </Semana>

            <Semana>
                <h3>Sábado</h3>
                {taskDay("sabado")}
            </Semana>
        </Section>
    </div>
  )
}

export default Planner;
