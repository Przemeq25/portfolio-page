import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&display=swap');;

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body, html {
        font-family: ${(props) => props.theme.font.family};
        color: ${(props) => props.theme.colors.secondary};
        font-weight: ${(props) => props.theme.font.weight.regular};
    }
    
`;
