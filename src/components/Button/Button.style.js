import styled from 'styled-components';

export const StyledButton = styled.button`
    color: ${(props) =>
      props.white
        ? props.theme.colors.contrastText
        : props.theme.colors.secondary};
    text-transform: uppercase;
    font-size: ${(props) => props.theme.font.size.desktop.md};
    font-weight: ${(props) => props.theme.font.weight.bold};
    background: none;
    border: none;
    cursor: pointer;
    position: relative;
    outline: none;
    z-index:1;
        &:after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 20px;
            z-index: -1;
            border-bottom: 8px solid ${(props) => props.theme.colors.primary};
            width: 100%;
            transition: transform 0.3s ease-in-out;
        }

        &:hover::after {
            transform: translate(-15px, -5px);
        }
    }
    
`;
