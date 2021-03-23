import styled from 'styled-components';

export const StyledButton = styled.button`
    color: ${({ theme, light }) =>
      light ? theme.colors.background.secondary : theme.colors.secondary};
    text-transform: uppercase;
    font-size: ${({ theme, small }) =>
      small ? theme.font.size.desktop.xs : theme.font.size.desktop.md};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-family: inherit;
    background: none;
    border: none;
    cursor: pointer;
    position: relative;
    outline: none;
    z-index:1;
    transition: 200ms transform ease-in-out;

    &:after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 20px;
        z-index: -1;
        border-bottom: ${({ small }) => (small ? 6 : 8)}px solid ;
        border-color: ${({ theme }) => theme.colors.primary};
        border-radius: 2px;
        width: 100%;
        transition: 200ms all ease-in-out;
        }

        &:hover::after, &:active::after{
            transform: translate(-15px, -5px);
        }
        &:active {
            transform: scale(0.95);
        }
        
    }

    ${({ theme }) => theme.mediaBreakpoints.md} {
      font-size: ${({ theme, small }) =>
        small ? theme.font.size.mobile.xs : theme.font.size.mobile.md};
    }
    
`;
