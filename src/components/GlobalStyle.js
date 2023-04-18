import { createGlobalStyle } from 'styled-components';

   const GlobalStyle = createGlobalStyle`
     @font-face {
       font-family: 'Lato';
       src: url('fonts/Lato-Regular.ttf');
     }

     body {
       font-family: 'Lato', sans-serif;
     }
   `;

   export default GlobalStyle;