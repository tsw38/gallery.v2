import styled from 'styled-components';
import {black_hover_rgba, white_hover_rgba} from 'styles/colors';

export const Footer = styled.header`
    display: grid;
    grid-template-areas: 'theme social';
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`;

export const FooterContent = styled.div`
    background-color: ${white_hover_rgba};
`;

export const Theme = styled(FooterContent)`
    grid-area: theme;
    cursor: pointer;
    transition: all 250ms ease;

    svg {
        transform: scale(0.75);
        transform-origin: center;
    }

    &:hover {
        background-color: ${black_hover_rgba};

        svg {
            fill: white;
        }
    }
`;
