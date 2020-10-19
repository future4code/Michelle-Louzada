import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { RecipeContainer, ScreenContainer } from './styled'
import AddPostForm from './AddPostForm'
import Typography from '@material-ui/core/Typography'

const AddPost = () => {
  useProtectedPage()
  return (
    <ScreenContainer>
      <RecipeContainer>
        <Typography gutterBottom variant={'h4'} align={'center'} color={'textPrimary'}>Adicionar um Novo Post</Typography>
        <AddPostForm/>
      </RecipeContainer>
    </ScreenContainer>
  )
}

export default AddPost