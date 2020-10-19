import styled from 'styled-components'

export const ContainerImg = styled.div`
    display: flex;
    justify-content: center;
    width: 99vw;
    height: 98vh;
    background-color: #121d3b;
`
export const Img = styled.img`
    width: 95vw;
    max-width: 800px;
    height: 40vh;
    @media(min-height: 800px) {
        height: 68vh;
    }
`