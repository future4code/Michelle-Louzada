// import axios from 'axios'
// import { BASE_URL } from '../constants/urls'

// export const addComment = (body, setIsLoading, id) => {
//   setIsLoading(true)
//   axios.post(`${BASE_URL}/posts/${id}/comment`, body, {
//     headers: {
//       Authorization: localStorage.getItem('token')
//     }
//   }).then((response) => {
//       setIsLoading(false)
//       console.log(response)
//     }
//   ).catch((error) => {
//       console.log(error)
//       setIsLoading(false)
//       alert('Não foi possível criar seu post, por favor tente novamente.')

//     }
//   )
// }