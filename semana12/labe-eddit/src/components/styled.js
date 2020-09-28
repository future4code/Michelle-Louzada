import styled from 'styled-components'

export const All = styled.div`
 background-color: #121d3b;
 color: white;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 8px 24px;
 margin: 0 auto;
 border-bottom: 1px solid #EEE9E9;
 box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);

`

export const Logo = styled.img`
    width: 200px;
    height: 50px;   
    cursor: pointer;
    @media(max-width: 385px) {
        width: 170px;
        height: 50px;
    }
    @media(min-width: 1024px) {
        margin-left: 50px;
    }
`
export const Container1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`
export const Container2 = styled.div`
    align-self: center;
    @media(min-width: 1024px) {
        margin-right: 50px;
    }
`
export const SpanStyled = styled.span`
    margin: 15px;
    font-weight: 600;
    cursor: pointer;
    @media(max-width: 385px) {
        font-size: 15px;
    }
    &:hover {
        color: #f2b425;
    }
`