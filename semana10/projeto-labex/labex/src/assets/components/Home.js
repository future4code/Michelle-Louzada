import React from "react";
import styled from "styled-components"
import Carousel from 'react-elastic-carousel'
import Cosmos from '../imgs/cosmos.jpg'
import Cosmos2 from '../imgs/cosmos1.jpg'
import Saturno from '../imgs/jupter.jpg'
import Marte from '../imgs/marte.jpg'
import Saturno2 from '../imgs/saturno.jpg'


const ContainerHome = styled.div`
    max-width: 1024px;
    margin: 24px auto;
    padding: 0 24px;
`

const SlideShow = styled.div`
    margin: 2em 0em 2em 0em;
    padding: 2vw;
    width: 950px;
    height: 280px;
    display: flex;
    align-items: center;
    
    `
const Img = styled.img`
    width: 820px;
    height: 300px;
    border-radius: 10px;
`

export default function Home() {

    return (
        <ContainerHome> 
                <SlideShow>
                    <Carousel  itemsToShow={1} enableAutoPlay>
                        <Img src={Cosmos} />
                        <Img src={Cosmos2} />
                        <Img src={Saturno} />
                        <Img src={Marte} />
                        <Img src={Saturno2} />
                    </Carousel>
                </SlideShow>
        </ContainerHome> 
    )
}