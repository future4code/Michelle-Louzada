import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToHomePage, goToLoginPage } from '../routes/goToPage'
import {useState} from 'react'



export const login = (body, history, setIsLoading, setName) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/login`, body)
    .then((response) => {
      localStorage.setItem('token', response.data.token)
      setName(response.data.user.username)
      setIsLoading(false)
      goToHomePage(history)
    })
    .catch((error) => {
      console.log(error)
      setIsLoading(false)
      alert("Falha no Login, tente novamente")
    })

}
export const signUp = (body, history, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/signup`, body)
    .then((response)=>{
      alert(`cadastro efetuado com sucesso!`)
      setIsLoading(false)
      goToLoginPage(history)
    })
    .catch((error) => {
      console.log(error.messege)
      setIsLoading(false)
      alert("Falha no Cadastro, tente novamente")
    })
}