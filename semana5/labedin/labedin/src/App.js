import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from "./components/CardPequeno/CardPequeno";
import imagem from "./img/eu 1.jpg";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={imagem} 
          nome="Michelle Louzada Carballo" 
          descricao="Oi, eu sou a Michelle. Sou aluna da Labenu e estou cursando Web Full Stack. Tenho conhecimento em HTML, CSS, Javascript e React."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
        <CardPequeno 
          imagem="https://png.pngtree.com/png-clipart/20190516/original/pngtree-email--envelope-icon-png-image_3566081.jpg"
          titulo="Email:"
          conteudo="hinatah@gmail.com"
        />
        <CardPequeno 
          imagem="https://w7.pngwing.com/pngs/30/177/png-transparent-ip-address-computer-icons-encapsulated-postscript-address-miscellaneous-logo-video-player.png"
          titulo="Endereço:"
          conteudo="Rua 1092, 232, Vila Manaus, Criciúma/SC"
        />
        <CardPequeno 
          imagem="https://image.flaticon.com/icons/png/512/102/102093.png"
          titulo="Telefone:"
          conteudo="(48) 98861-8130"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://i0.wp.com/empregosemcuritiba.com.br/wp-content/uploads/2020/01/aBC-4.png?fit=500%2C265&ssl=1" 
          nome="Lojas Colombo" 
          descricao="Crediário e liberação de crédito, atendimento em geral." 
        />
        
        <CardGrande 
          imagem="https://i.pinimg.com/280x280_RS/ac/d7/f1/acd7f1e7ce4043b07c30afbdd95a06b5.jpg" 
          nome="Riachuelo" 
          descricao="Atendimento ao cliente, crediário, cadastro de cliente." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
