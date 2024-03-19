import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-style: normal;
    margin: 10px 15px;
    background: #060d17;
    color: snow;
    
    *::-webkit-scrollbar {
      width: 12px;
    }

    *::-webkit-scrollbar-track {
      border-radius: 8px;
      background-color: #e7e7e7;
      border: 1px solid #cacaca;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    }

    *::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background-color: #363636;
    }
  }
`;