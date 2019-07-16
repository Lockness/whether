import { createGlobalStyle } from 'styled-components';

const BaseStyles = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background: linear-gradient(to bottom, rgb(101, 116, 205) 0%, rgb(101, 116, 205) 13%, rgb(27, 37, 94) 100%);
        color: white;
        margin: 0;
        padding: 0;
        min-height: 100%;
        font-family: 'Dosis', sans-serif;
    }
`;

export default BaseStyles;
