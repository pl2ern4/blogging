import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from './style';

const ApplicationTheme = ({children}) => {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </>
    )
}

export default ApplicationTheme;