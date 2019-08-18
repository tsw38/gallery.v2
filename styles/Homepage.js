import styled from 'styled-components';

export default styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    ${({url}) => {
        return `
            background-image: url('${url}');
        `;
    }}
`;