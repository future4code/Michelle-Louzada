// import React, { useState } from 'react'
// import TextField from '@material-ui/core/TextField'
// import Button from '@material-ui/core/Button'
// import { InputsContainer, AddRecipeFormContainer} from './styled'
// import { useHistory } from 'react-router-dom'
// import useForm from '../hooks/useRequestData'
// import { addComment } from '../services/createComent'
// import CircularProgress from '@material-ui/core/CircularProgress'

// const Comments = (props) => {
//   const history = useHistory()
//   const [form, handleInputChange] = useForm({text: ''})
//   const [isLoading, setIsLoading] = useState(false)

//   const onClickAddComment = (event) => {
//     event.preventDefault()
//     const element = document.getElementById('addpost_form')
//     const isValid = element.checkValidity()
//     element.reportValidity()
//     if (isValid) {
//       addComment(form, setIsLoading)
//     }
//   }

// 	return (
// 		<form id={'addpost_form'}>
//       <AddRecipeFormContainer>
//         <InputsContainer>
//           <TextField
//             value={form.text}
//             name={'text'}
//             onChange={handleInputChange}
//             label={'Título'}
//             variant={'outlined'}
//             fullWidth
//             required
//             autoFocus
//             margin={'normal'}
//           />
//           </InputsContainer>
//         <Button
//           onClick={onClickAddComment}
//           color={'primary'}
//           variant={'contained'}
//           type={'submit'}
//           fullWidth
//           margin={'normal'}
//         >
//           {isLoading ? <CircularProgress color={'inherit'} size={24}/> : <>Adicionar Post</>}
//         </Button>
//       </AddRecipeFormContainer>
//     </form>
// 	)
// }


// export default Comments