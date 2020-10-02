import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, AddRecipeFormContainer} from './styled'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { addPost } from '../../services/addPost'
import CircularProgress from '@material-ui/core/CircularProgress'

const AddPost = (props) => {
  const history = useHistory()
  const [form, handleInputChange] = useForm({title: '', text: ''})
  const [isLoading, setIsLoading] = useState(false)

  const onClickAddPost = (event) => {
    event.preventDefault()
    const element = document.getElementById('addpost_form')
    const isValid = element.checkValidity()
    element.reportValidity()
    if (isValid) {
      addPost(form, history, setIsLoading)
    }
  }

  return (
    <form id={'addpost_form'}>
      <AddRecipeFormContainer>
        <InputsContainer>
          <TextField
            value={form.title}
            name={'title'}
            onChange={handleInputChange}
            label={'Título'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
          <TextField
            value={form.text}
            name={'text'}
            onChange={handleInputChange}
            label={'Descrição'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
          />
          
        </InputsContainer>
        <Button
          onClick={onClickAddPost}
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
          margin={'normal'}
        >
          {isLoading ? <CircularProgress color={'inherit'} size={24}/> : <>Adicionar Post</>}
        </Button>
      </AddRecipeFormContainer>
    </form>
  )
}

export default AddPost