import styled, { css } from 'styled-components';
import { Variables } from '../../../../utils';
import { Link } from 'react-router-dom';

export const AdminWrapper = styled.div`
  width:100%;
  height:100%;
`;

export const Menu = styled.ul`
  text-decoration:none;
  list-style:none;
`;

export const StyledLink = styled(Link)`
  display:block;
  width:100%;
  color: ${Variables.textBlack};
  text-decoration:none;
  padding: 10px 0;
  text-align:center;
  font-size:14px;
  border-bottom: 1px solid #f0f3f5;
  background-color:transparent;
  transition: background-color 500ms ease, color 500ms ease;

  &:nth-of-type(odd){
    background-color:#ececec;
  }

  &:hover {
    color: white;
    background-color: ${Variables.textBlack};
  }

`;
