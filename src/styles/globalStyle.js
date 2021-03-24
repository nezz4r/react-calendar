import { createGlobalStyle } from 'styled-components';

import { Reset } from './reset';
import { Variables } from './variables';

export const GlobalStyle = createGlobalStyle`

  ${Reset}

  ${Variables}

  
  background: #e4e4e4;

`;
