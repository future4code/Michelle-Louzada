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
  height: 40px;
  outline: none;
  margin: 10px 2px 10px 3px;
  border-radius: 5px;
  width: 220px;
    
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
  height: 650px;
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
  font-size: 50px;
`
const Container = styled.div`
 display: flex;
 justify-content: center;
  
`
const Image = styled.img`
  width: 80%;
  height: 200px;
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
  renderImage = () => {
    if (this.state.age <= 5){
      return <Image src="https://cdn.maemequer.pt/wp-content/uploads/2015/08/bebe-375.jpg" />
    }else if (this.state.age <= 15){
      return <Image src="https://cdn.maemequer.pt/wp-content/uploads/2015/09/menina-500.jpg" />
    }else if (this.state.age <= 25){
      return <Image src="https://mercado.etc.br/wp-content/uploads/2016/08/1470356496_379_Lembra-da-crian%C3%A7a-mais-linda-do-mundo-Ela-cresceu-e-est%C3%A1-maravilhosa.jpg" />
    }else if(this.state.age <= 40){
      return <Image src="https://www.sbd-sp.org.br/geral/wp-content/uploads/2017/10/25anos.jpg" />
    }else if(this.state.age <= 60){
      return <Image src="https://ccolhos.com.br/wp-content/uploads/2015/06/post03.jpg" />
    }else if(this.state.age <= 80){
      return <Image src="https://3.bp.blogspot.com/-_hPkWbtLNXg/UemdZ5BfqBI/AAAAAAAAElM/Ye_P1hRG1GY/w1200-h630-p-k-no-nu/Idosos.jpg" />
    }else if(this.state.age <= 100){
      return <Image src="https://2.bp.blogspot.com/-zywteJV6N9E/VusEKoGolRI/AAAAAAAAaHo/-rjC2YFjqNEVLvjlOQZTCqV8mPlzonerQ/s1600/7fa6c9bff71c6f91be169c624da965c8.jpg" />
    }
  }
  render(){
    return(
      <Container>
        <All>
          <Titulo>Vamos advinhar Sua Idade Pelo Seu Nome?</Titulo>
          <InputPersonalizade placeholder="Seu nome <3" onChange={this.onChangeName} />
          <ButtonPersonalizade onClick={() => this.playNames(this.state.name)}>Enviar!</ButtonPersonalizade>
          <h1>Sua Idade: {this.state.age}</h1>
          {this.renderImage()}
        </All>
      </Container>
    )
  }
}
