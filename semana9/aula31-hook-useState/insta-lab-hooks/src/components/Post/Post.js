import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
  const [curtido, setCurtidoValue] = useState(false);
  const [numeroCurtidas, setNumeroCurtidas] = useState(0)
  const [comentado, setComentadoValue] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [comentariosValue, setComentariosValue] = useState([""])

  const onClickCurtida = () => {
    if(curtido){
      setCurtidoValue(!curtido)
      setNumeroCurtidas(numeroCurtidas -1)
    }else {
      setCurtidoValue(!curtido)
      setNumeroCurtidas(numeroCurtidas +1)
    }
  };

  const onClickComentario = () => {
    setComentadoValue(!comentado)
  };

  const enviarComentario = (comentario) => {
    const novaListaComentario = [...comentariosValue, comentario]
    setComentariosValue(novaListaComentario)
    setComentadoValue(false)
    setNumeroComentarios(numeroComentarios +1)
  }
  const iconeCurtida = curtido ? (iconeCoracaoPreto) : (iconeCoracaoBranco)
  const caixaDeComentario = comentado ? (
    <SecaoComentario enviarComentario={enviarComentario} />
  ) : (
    comentariosValue.map((comentario) =>{
      return (
        <CommentContainer>
          <p>{comentario}</p>
        </CommentContainer>
      )
    })
  )
  console.log(comentariosValue)

  return (
    <PostContainer>
      
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  )
}

export default Post