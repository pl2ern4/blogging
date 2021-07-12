import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    html, body{
        width:100%;
        height: max-content;
        margin: 0; 
        font-family:Verdana;
        #__next{
            height:100%;
            width: 100%;
        }
    }
    body{
        &::-webkit-scrollbar {
            width: 0.5rem;
        }
        &::-webkit-scrollbar-track {
            color: darkgray;
            
        }
        &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
          }
    }
`;
const theme = {
    colors: {
      primary: "#fafafa",
    },
    title: {
        color: 'white',
        fontWidth: '700'
    }
};

export {
    GlobalStyle,
    theme
}