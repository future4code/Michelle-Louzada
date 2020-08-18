import React from "react";

class Etapa1 extends React.Component {
    state ={
        nome:"",
        idade:"",
        email:"",
        escolaridade: true
      }
     
    render(){
        const options = ["Ensino Médio Incompleto", "Ensino Médio Completo", "Ensino Superior Incompleto", "Ensino Superior Completo"];
        return(
            <div>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <ol>
                    <li>Qual seu nome?</li>
                    <input />
                    <li>Qual sua idade?</li>
                    <input />
                    <li>Qual seu email?</li>
                    <input />
                    <li>Qual sua escolaridade?</li>
                </ol>
                <div>
                    <select
                        value={this.state.exercicioSelecionado}
                        onChange={e =>
                        this.setState({ exercicioSelecionado: e.target.value })
                        }
                    >
                        {options.map(optionValue => (
                            <option value={optionValue}>{optionValue}</option>
                        ))}
                    </select>
                 </div>
                
            </div>

        )
    }
}
export default Etapa1;