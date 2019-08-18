import styled from 'styled-components';
import {black_hover_rgba, white_hover_rgba} from 'styles/colors';

export const Header = styled.header`
    display: grid;
    grid-template-areas: 'title links';
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    a {
        display: flex;
        justify-content: center;
        align-self: center;
        align-items: center;

        padding: 8px 16px;
    }
`;

export const HeaderContent = styled.div`
    a {
        background-color: ${white_hover_rgba};
        font-weight: 400;
        text-transform: uppercase;
        transition: all 250ms ease;

        &:hover {
            background-color: ${black_hover_rgba};
            color: white;

            svg {
                fill: white;
            }
        }
    }
`;

export const Title = styled(HeaderContent)`
    grid-area: title;
`;

export const Links = styled(HeaderContent)`
    grid-area: links;
    display: grid;
    grid-template-columns: repeat(3, auto);
    cursor: pointer;
`;