import styled from "styled-components";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import Fab from '@material-ui/core/Fab'

export const ArrowUp = styled(ArrowUpwardIcon)`
  cursor: pointer;
  &:hover {
    background-color: #efefef;
  }
  &:target {
    color: orange;
  }
`
export const Icon = styled(ChatBubbleIcon)`
  cursor: pointer;
  color: #878a8c;
  margin-right: 1rem;
  width: 2vw;
  &:hover {
    background-color: #efefef;
  }
`
export const ArrowUpClick = styled(ArrowUpwardIcon)`
  cursor: pointer;
  color: orange;
  &:hover {
    background-color: #efefef;
  }
`
export const ArrowDownClick = styled(ArrowDownwardIcon)`
  cursor: pointer;
  color: orange;
  &:hover {
    background-color: #efefef;
  }
`
export const ArrowDown = styled(ArrowDownwardIcon)`
  cursor: pointer;
  &:hover {
    background-color: #efefef;
  }
`
export const PostContainer = styled.div`
  display: flex;
  height: auto;
  width: 50%;
  max-width: 600px;
  border: 1px solid black;
  margin-top: 2rem;
  border-radius: 0px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media (max-width: 420px) {
    width: 92vw;
  }

`
export const DivUpDown = styled.div`
  max-width: 15vw;
  height: auto;
  background-color: #f8f9fa;
  flex-direction: column;
  align-items: center;
  display: flex;
  padding-top: 1rem;
  
`
export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 1rem;
  height: inherit;
`
// export const TimeTitle = styled.p`
//   font-size: 0.675rem;
//   color: black;
// `​
export const TitleCard = styled.h1`
  font-size: 2vw;
  font-weight: bold;
  font-family: Verdana;
  color: black;
  letter-spacing: 0.1em;
  text-align: center;
`
export const TextPara = styled.p`
  font-size: 1vw;
  font-family: Verdana;
  color: black;
  letter-spacing: 0.1em;
  @media (max-width: 530px) {
    font-size: 3vw;
  }
`
export const CommentsContainer = styled.div`
  width: 100%;
  display: flex;
  margin-left: 2rem;
  align-items: center;
`
export const CommentTitle = styled.p`
  font-size: 0.675rem;
  color: #a9a9a9;
  font-weight: bold;
`
export const All = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Span = styled.span`
  color: gray;
  font-size: 10px;
  
`
export const User = styled.span`
  display: inline;
  font-weight: bolder
`
export const AddPostButton = styled(Fab)`
  position: fixed !important;
  right: 20px;
  bottom: 20px;
  z-index: 3;
  /* @media (max-width: 1645px) {
    right:24vw;
  }
  @media (max-width: 1445px) {
    right:20vw;
  }
  @media (max-width: 1045px) {
    right:15vw;
  }
  @media (max-width: 420px) {
    right:20px;
  } */
`