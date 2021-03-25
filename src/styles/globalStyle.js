import { createGlobalStyle } from 'styled-components';

import { Reset } from './reset';
import { Variables } from './variables';

export const GlobalStyle = createGlobalStyle`

  ${Reset}

  ${Variables}

  body{
    height: 100vh;
    width: 100%;
    background: var(--dark2);
    font-family: var(--font-body);
    display: flex;
    align-items: center;
    justify-content: center;
   
  }

  h1 {
    font-family: var(--font-title)
  }
  


`;
