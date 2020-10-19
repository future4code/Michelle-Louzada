import React from 'react';
import erroImg from '../../assets/error.jpg'
import { ContainerImg, Img } from "./styled"

function ErrorPage() {
  return (
    <ContainerImg>
        <Img src={erroImg} />
    </ContainerImg>
  );
}

export default ErrorPage;
