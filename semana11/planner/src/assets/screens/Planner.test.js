import React from "react";
import { render, fireEvent, screen, wait } from "@testing-library/react";
import Planner from './Planner'
import userEvent from '@testing-library/user-event';
import axios from 'axios'

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-michelle'

axios.get = jest.fn().mockResolvedValue({
    data: []
  })
  
  axios.post = jest.fn().mockResolvedValue()
  
  axios.delete = jest.fn().mockResolvedValue()

  describe('Lista de tarefas', () => {
    test('Testa renderização inicial', async () => {
      axios.get = jest.fn().mockResolvedValue({
        data: [{
          id: '1',
          text: 'cozinhar',
          day: "segunda"
        }]
      })
    const {getByPlaceholderText, getByText, findByText} = render(<Planner/>)

    const input = getByPlaceholderText('tarefa')
    expect(input).toBeInTheDocument() 

    const button = getByText(/Criar tarefa/)
    expect(button).toBeInTheDocument()

    const tarefaExemplo = await findByText(/cozinhar/)
    expect(tarefaExemplo).toBeInTheDocument()

    expect(axios.get).toHaveBeenCalledWith(baseUrl)
    
  })

  test('Testa criação de tarefas', async () => {
    axios.post = jest.fn().mockResolvedValue()
    axios.get = jest.fn().mockResolvedValue({
      data: []
    })

    const {getByPlaceholderText, getByText} = render(<Planner/>)

    const input = getByPlaceholderText('tarefa')
    expect(input).toBeInTheDocument()

    const button = getByText(/Criar tarefa/)
    expect(button).toBeInTheDocument()

    const selectDay = screen.getByTitle("Dia da semana")
    const optionDay = screen.getByTestId("segunda")

    await userEvent.type(input, 'teste um')
    userEvent.selectOptions(selectDay, optionDay.value)
    expect(selectDay).toHaveValue("segunda")

    userEvent.click(button)

    expect(axios.post).toHaveBeenCalledWith(baseUrl, {
      text: 'teste um',
      day: "segunda",
    })

    await wait(() => {
      expect(axios.get).toHaveBeenCalledTimes(2)
    })
    
  })
})