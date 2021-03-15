import React from 'react';
import { HeaderWrapper, NavbarLink, NavbarLinks } from './Header.style';

const Header = () => {
    return(
        <HeaderWrapper>
            <h2>PCichoń</h2>
            <NavbarLinks>
                <NavbarLink to = "/projects" >Projects</NavbarLink>
                <NavbarLink to = "/about" >About</NavbarLink>
                <NavbarLink to = "/contact" >Contact</NavbarLink>
            </NavbarLinks>
        </HeaderWrapper>
    )
}
export default Header;