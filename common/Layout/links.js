import { createGlobalStyle } from 'styled-components';
import { black } from 'styles/colors';

export default createGlobalStyle`
    .Link {
        color: ${black};
        text-decoration: none;
        transition: opacity 250ms ease;
        opacity: 1;

        &:hover {
            opacity: 0.75;
        }
    }
`;