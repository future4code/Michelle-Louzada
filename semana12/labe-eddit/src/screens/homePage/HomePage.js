import React from 'react'
import CardPost from './CardPost'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import Loading from '../../components/Loading'
import styled from 'styled-components'

const All = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const HomePage = () => {
    useProtectedPage()
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
                    />
                )
            })
        ) 
    }
    return (
        <All>
            {postList && postList.length > 0 ? renderPostList() : <Loading />}
        </All>
    )
}

export default HomePage