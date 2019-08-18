import styled from 'styled-components';
import {black_hover_rgba, white_hover_rgba, black} from 'styles/colors';

export const Footer = styled.footer`
    display: grid;
    grid-template-areas: 'theme social';
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
`;

export const FooterContent = styled.div`
    background-color: ${white_hover_rgba};
`;

export const Theme = styled(FooterContent)`
    grid-area: theme;
    cursor: pointer;
    transition: all 250ms ease;

    svg {
        transform: scale(0.70);
        transform-origin: center;
        transition: inherit;
    }

    ${({theme: {theme}}) => {
        if (theme === 'dark') {
            return `
                background-color: ${white_hover_rgba};

                &:hover {
                    background-color: ${black_hover_rgba};

                    svg {
                        fill: white;
                    }
                }

                svg {
                    fill: black;
                }
            `;
        } else {
            return `
                background-color: ${black_hover_rgba};

                &:hover {
                    background-color: ${white_hover_rgba};

                    svg {
                        fill: black;
                    }
                }

                svg {
                    fill: white;
                }
            `;
        }
    }}
`;
