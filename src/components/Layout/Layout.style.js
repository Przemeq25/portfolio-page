import styled from 'styled-components';

export const MainTemplate = styled.div`
    padding: 100px 0px 100px 100px;
    display: flex;
    position: relative;
    height: 100vh;
`;

export const LeftContainer = styled.div`
    width: 30%;
    height: 100%;
    position: relative;
`;

export const MainContainer = styled.main`
    width:70%;
`;

export const HeroContainer = styled.div`
    margin-top: 200px;
`;

export const HeroParagraph = styled.p`
    color: ${props => props.theme.colors.primary};
    font-size ${props=> props.theme.font.size.desktop.lg};
    font-weight: ${props => props.theme.font.weight.bold};
    text-transform: capitalize;
    
`;

export const HeroH1 = styled.h1`
    color: ${props => props.theme.colors.secondary};
    font-size ${props=> props.theme.font.size.desktop.title};
    font-weight: ${props => props.theme.font.weight.black};
    text-transform: uppercase;
    margin: 20px 0 40px;
`;

export const MediaLinksContainer = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
`;
export const MediaLink = styled.a`
    color: ${props => props.theme.colors.secondary};
    font-size ${props=> props.theme.font.size.desktop.md};
    text-transform: lowercase;
    padding-right: 50px;
    cursor: pointer;
`;