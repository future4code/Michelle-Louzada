import React, {useState} from 'react'
import {
    PostContainer,
    DivUpDown,
    DetailContainer,
    CommentsContainer,
    Icon,
    ArrowUp,
    ArrowDown,
    TitleCard,
    TextPara,
    TimeTitle,
    CommentTitle,
    ArrowUpClick,
    ArrowDownClick,
    Span,
    User,
  } from "./styled";
  import { useHistory } from "react-router-dom";
  import {goToSignUpPage} from '../../routes/goToPage'
  import { BASE_URL } from '../../constants/urls'
  import axios from 'axios'
  import Comments from '../../components/Comments'

const CardPost = (props) => {
    const history = useHistory();
    const [counter, setCounter] = useState(0);
    const [clickUp, setClickUp] = useState(false);
    const [clickDown, setClickDown] = useState(true);
    const [comentado, setComentadoValue] = useState(false)

    const timePassed = (createdAt) => {

      const now = new Date().getTime()
      const milisseconds = now - createdAt
      const minutes = milisseconds * 1.6667E-5
      const hours = Math.floor(milisseconds/(1000 * 60 * 60))
      const days = Math.floor(hours/24)
      const months = Math.floor(days/30)

      if (minutes < 1) {
          return `less than one minute ago`
      } else if (hours < 1) {
          return `${Math.ceil(minutes)} minutes ago`
      } else if (hours === 1) {
          return `${hours} hour ago`
      } else if (hours < 24) {
          return `${hours} hours ago`
      } else if (days === 1) {
          return `${days} day ago`
      } else if (days < 30) {
          return `${days} days ago`
      } else if (months === 1) {
          return `${months} month ago`
      } else if (months > 1) {
          return `${months} months ago`
      }
}
  

  const vote = (choice) => {
    const body = {
      direction: choice,
    }
    axios.put(`${BASE_URL}/posts/${props.postId}/vote`, body,{
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
    .then((response) => {
      console.log(response)
        setCounter(choice);
        setClickUp(!clickUp);
        setClickDown(!clickDown);
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
   return (
    <PostContainer>
    <DivUpDown>
      {clickUp ? <ArrowUpClick /> : <ArrowUp onClick={() => vote(+1)} />}
      <p>{props.votesCount}</p>
      {clickDown ? (
        <ArrowDownClick />
      ) : (
        clickDown && <ArrowDown onClick={() => vote(-1)} />
      )}
    </DivUpDown>
​
    <DetailContainer>
      <p>Posted by <User>{props.userName}</User></p>
      <Span>{timePassed(props.post.createdAt)}</Span>
      <TitleCard>{props.title}</TitleCard>
      <TextPara>{props.text}</TextPara>
      <CommentsContainer>
        <Icon fontSize={"small"} onClick={() => goToSignUpPage(history)} />
        <CommentTitle>{props.commentsCount} comments</CommentTitle>
        
      </CommentsContainer>
    </DetailContainer>
  </PostContainer>
);
}
export default CardPost