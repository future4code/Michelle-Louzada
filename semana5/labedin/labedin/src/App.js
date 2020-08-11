import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from "./components/CardPequeno/CardPequeno";
import CardHeader from "./components/CardHeader/CardHeader"
import imagem from "./img/eu 1.jpg";
import logo from "./img/labedin.png"

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
      <nav>
        <ul>
          <li className="miclass ">
            <a href="index.html"><img src={logo} className="logotipo"/></a>
          </li>
          <li className="4 ">
            <input
              type="text "
              name="busca "
              id="busca "
              placeholder="Busca "
            />
          </li>
          <li>
          <CardHeader 
          titulo="Inicio"
          imagem="https://png.pngtree.com/png-clipart/20190516/original/pngtree-real-estate-house-icon-png-image_3568825.jpg"
          />
         </li>
         <li>
           <CardHeader 
           titulo="Minha Rede"
           imagem="data:image/png;base64,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"
           />
         </li>
         <li>
           <CardHeader 
           titulo="Vagas"
           imagem="https://img2.gratispng.com/20180319/skw/kisspng-briefcase-computer-icons-suitcase-baggage-simple-briefcase-icon-bag-baggage-breafcase-bri-5ab0585dcd9d94.0458928515215063978422.jpg"
           />
         </li>
         <li>
           <CardHeader 
           titulo="Mensagens"
           imagem="https://png.pngtree.com/png-vector/20190228/ourlarge/pngtree-vector-message-icon-png-image_710169.jpg"
           />
         </li>
         <li>
           <CardHeader 
           titulo="Notificações"
           imagem="https://toppng.com/uploads/preview/bell-sino-notification-notificacao-youtube-icon-icone-youtube-bell-icon-11553443347kdqagwf3bt.png"
           />
         </li>
         <li>
           <CardHeader 
           titulo="Eu"
           imagem={imagem}
           />
         </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
