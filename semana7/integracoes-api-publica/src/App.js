import React from 'react';
import axios from 'axios'
import styled from 'styled-components'

const InputPersonalizade = styled.input`
  background-color: #F1F1F3;
  -webkit-box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
  box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
  border: none;
  width: ${props => props.width};
  height: 35px;
  outline: none;
  margin: 10px 2px 10px 3px;
  border-radius: 5px;
  width: 180px;
    
`
const ButtonPersonalizade = styled.button`
  background-color: #DB7093;
  margin: 20px 4px 10px 3px;
  text-decoration: none;
  border: none;
  border-radius: 10px;
  padding: 10px 10px;
  color: white;
  font-size: 12px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: bold;
  -webkit-box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
  box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
  width: 100px;
  outline: none;
`
const All = styled.div`
  width: 500px;
  height: 350px;
  background-color: #FFE4C4;
  text-align: center;
  border: 2px solid black;
  display: flex;
  align-items: center;
  flex-direction: column;
  
`
const Titulo = styled.h1 `
  margin: 10px;
  padding: 5px;
`
const Container = styled.div`
 display: flex;
 justify-content: center;
  
`
export default class App extends React.Component {
  state = {
   name: "",
    age: 0,
    nameAtt: ""
  }

  playNames = (name) => {
    axios.get(`https://api.agify.io?name=${name}`)
    .then((response) => {
      console.log(response)
      this.setState({
        nameAtt: response.data.name,
        age: response.data.age,
        name: ""
      })
  
    }).catch((error) => {
      console.log(error)
    })
  }
  
  onChangeName = (event) => {
    this.setState({name: event.target.value})
  }
  render(){
    return(
      <Container>
        <All>
          <Titulo>Vamos Advinhar Sua Idade Pelo Seu Nome?</Titulo>
          <InputPersonalizade placeholder="Seu nome <3" onChange={this.onChangeName} />
          <ButtonPersonalizade onClick={() => this.playNames(this.state.name)}>Enviar!</ButtonPersonalizade>
          <h3>Sua Idade: {this.state.age}</h3>
        </All>
      </Container>
    )
  }
}
