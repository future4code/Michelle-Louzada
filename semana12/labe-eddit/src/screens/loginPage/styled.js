import Styled from 'styled-components'
import { styled } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';

export const FormDiv = styled(Grid)({
    display: "grid",
    gap: "1em",
    alignItems: "center",
    justifyItems: "center",
    width: "100vw",
    marginBottom: "50px",
    marginTop: "30px;"
  })
export const ImgLogo = Styled.img`
     @media(max-width: 420px) {
       width: 300px;
     }
  `
  
export const Buttonn = styled(Button)({
    width: "150px",
    marginTop: "30px"
  })
  
export const Cadastrar = Styled.span`
      text-decoration: underline;
      &:hover {
          color: #f2b425;
      } 
  `
  