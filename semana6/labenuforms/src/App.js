import React from 'react';
import './App.css';
import styled from "styled-components";
import Etapa1 from "./components/Etapa1"
import Etapa2 from "./components/Etapa2"
import Etapa3 from "./components/Etapa3"
import Final from "./components/Final"

const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
  padding: 20px;
  margin: 20px;
  width: auto;
`;

class App extends React.Component {
  state ={
    etapa: 1,
  }
  onClickRenderizaTela = () =>{
    this.setState({
      etapa: this.state.etapa +1
    })
  }
  renderizaEtapa = () =>{
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
      case 2: 
        return <Etapa2 />
      case 3: 
        return <Etapa3 />
      case 4:
        return <Final />
      default:
        return <div></div>
    }
  }

  render() {
    return (
      <AppContainer> 
        {this.renderizaEtapa()}
        <button onClick={this.onClickRenderizaTela}>Proxima Tarefa</button>
      </AppContainer>
    );
    
  }
 

}
export default App;

