import React from 'react';
import Logo from '../labelove1 (1).svg'
import styled from 'styled-components'
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import IconButton from '@material-ui/core/IconButton'


const ImgLogo = styled.img`
    width: 200px;
    height: 85px;
    margin-left: 10px;
`
const All = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #EEE9E9;
    @media(min-width: 800px) {
        border: none;
    }
    
`
const Icon = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 45%;
    padding-top: 10px;
    @media(min-width: 800px) {
        width: 160px;
        
    }
    
`

export default function Header(props) {
    return(
        <All>
            <ImgLogo src={Logo} onClick={props.onClickMatch} />
            <Icon>
                <IconButton aria-label="people" onClick={props.onClickList} >
                    <GroupAddIcon fontSize="large" color="secondary" />
                </IconButton>
            </Icon>
        </All>
    )
}