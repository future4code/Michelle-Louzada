import React from 'react';

class Etapa3 extends React.Component{
    state = {
        
    }
    render(){
        const options = ["Nenhum", "Curso Técnico", "Curso de Ingles"];
        return(
            <div>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINOR</h1>
                <p>6.Por que você não terminou um curso de graduação?</p>
                <input />
                <p>7.Você fez algum curso complementar?</p>
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

export default Etapa3;