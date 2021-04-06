import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
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
