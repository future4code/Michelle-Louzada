import React from 'react'
import CardPost from './CardPost'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import Loading from '../../components/Loading'
import styled from 'styled-components'
import { Add } from '@material-ui/icons'
import {AddPostButton} from './styled'
import {goToAddPost} from '../../routes/goToPage'
import {useHistory} from 'react-router-dom'

const All = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const HomePage = () => {
    useProtectedPage()
    const history = useHistory()
    const postList = useRequestData([], '/posts')
    const renderPostList = () => {
        return (
            postList.map((post) => {
                return (
                    <CardPost 
                    key={post.id}
                    text={post.text}
                    userName={post.username}
                    post={post}
                    postId={post.id}
                    votesCount={post.votesCount}
                    commentsCount={post.commentsCount}
                    />
                )
            })
        ) 
    }
    return (
        <All>
            {postList && postList.length > 0 ? renderPostList() : <Loading />}
            <AddPostButton color={'primary'} onClick={() => goToAddPost(history)}>
        <Add/>
      </AddPostButton>
        </All>
    )
}

export default HomePage