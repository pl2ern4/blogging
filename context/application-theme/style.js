import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    html, body{
        width:100%;
        height: 100%;
        margin: 0; 
        font-family:Verdana;
        #__next{
            height:100%;
            width: 100%;
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