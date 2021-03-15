import React from 'react';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./src/themes/GlobalStyles";
import {theme} from "./src/themes/theme";

export const wrapRootElement = ({element}) =>(
    <ThemeProvider theme = {theme}>
        <GlobalStyles/>
        {element}
    </ThemeProvider>
)