import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToHomePage } from '../routes/goToPage'

export const addPost = (body, history, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/posts`, body, {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  }).then((response) => {
      setIsLoading(false)
      alert("Post adicionado com sucesso!")
      goToHomePage(history)
    }
  ).catch((error) => {
      console.log(error)
      setIsLoading(false)
      alert('Não foi possível criar seu post, por favor tente novamente.')

    }
  )
}