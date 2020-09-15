import React from 'react';
import Box from '@material-ui/core/Box';
import styled from 'styled-components'

const All = styled.div`
    width: 100%;
    @media(min-width: 800px) {
        width: 21%;
        margin-left: 40%

    }
`
export default function Footer() {
  return (
    <All >
      <Box display="flex" p={1} bgcolor="#f06f5c">
        <Box p={1} flexGrow={1} bgcolor="#f06f5c" color="#FFFCEF" fontSize="0.5em">
          <p>Labelove © 2020 - Todos os direitos reservados - labelove.com.br atividades de internet LTDA</p> 
        </Box>
      </Box>
    </All>
  );
}