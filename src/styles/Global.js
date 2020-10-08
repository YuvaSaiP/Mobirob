import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
  @font-face {
  font-family: 'Mobirobo';
  src: local('Mobirobo'), url(./styles/fonts/Quicksand-Regular.ttf) format('ttf');
}

  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  html {
    ${"" /* font-size: 62.5%; */}
  }

  body {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;  
    width:100%;
    ${'' /* background:#F5F5F5; */}
    background:#F6F6F9;
    color:#003A52;
  }
  .site-wrapper{
    width:90%;
    padding-top:4.2rem;
    ${'' /* background:white; */}
    margin:0 auto;
  }
`;

export default GlobalStyles;
