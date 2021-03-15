import styled from 'styled-components';
import { Link } from 'gatsby';

export const HeaderWrapper = styled.nav`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-right: 100px;
`;

export const NavbarLinks = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
`;

export const NavbarLink = styled(Link)`
    font-size: ${props => props.theme.font.size.desktop.md};
    color: ${props => props.theme.colors.secondary};
    font-weight: ${props => props.theme.font.weight.medium};
    padding-left:30px;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

`;