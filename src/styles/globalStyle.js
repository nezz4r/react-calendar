import { createGlobalStyle } from 'styled-components';

import { Reset } from './reset';
import { Variables } from './variables';

export const GlobalStyle = createGlobalStyle`

  ${Reset}

  ${Variables}

  
  background: var(--light);
  font-family: var(--font-body);

`;
