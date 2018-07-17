import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { Variables } from '../../utils';

export default class Header extends React.Component {
  render(){
    return(
      <StyledHeader>
        <LeftMenu>
          <H1>
            <StyledLink to={'/'}>
              Tyler Scott
              <Trick> | Chicago Wedding & Portrait Photographer</Trick>
            </StyledLink>
          </H1>
        </LeftMenu>
        {(/true/.test(this.props.hideMenu)) ? ('') : (
          <RightMenu>
            <StyledList>
              <ListElement>
                <Link to={'/about/'} title="About">About</Link>
              </ListElement>
              <ListElement>
                <Link to={'//www.facebook.com/tylerscottwilliamsphotography/'} target="_blank" className="facebook" title="Facebook">F<Trick>acebook</Trick></Link>
              </ListElement>
              <ListElement>
                <Link to={'/archive/'} title="Archive">
                  <div className="gridWrapper">
                    <div className="row"><span className="cell" /><span className="cell" /><span className="cell" /></div>
                    <div className="row"><span className="cell" /><span className="cell" /><span className="cell" /></div>
                    <div className="row"><span className="cell" /><span className="cell" /><span className="cell" /></div>
                    <Trick>Archive</Trick>
                  </div>
                </Link>
              </ListElement>
            </StyledList>
          </RightMenu>
        )}
      </StyledHeader>
    )
  }
}


const StyledHeader = styled.header`
  position:absolute;
  top:-1px; left:0; right:0;
  z-index:1000;
  max-height:45px;
  height:45px;
  display:block;
`;

const SubMenuContent = styled.div`
  width: 50%;
  height: inherit;
  display: inline-block;
  vertical-align: top;
`;

const LeftMenu = SubMenuContent.extend``;
const RightMenu = SubMenuContent.extend``;

const H1 = styled.h1`
  display: flex;
  justify-content: flex-start;
`;

const Trick = styled.span`
  display:block;
  height:0;
  width:0;
  visibility:hidden;
`;

const StyledLink = styled(Link)`
  display:block;
  text-transform:uppercase;
  color:${Variables.textBlack};
  background-color:${Variables.backgroundState};
  text-decoration:none;
  font-size:14px;
  letter-spacing:2.5px;
  padding:15px;
  transition:color 500ms ease, background-color 500ms ease;

  @media (hover: hover) {
    &:hover{
      color:${Variables.backgroundState};
      background-color:${Variables.textBlack};
    }
  }

  @media only screen and (max-width:468px){
    font-size:12px;
  }
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: flex-end;
  height: 100%;
`;

const ListElement = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 45px;
  background-color: ${Variables.backgroundState};
  transition: background-color 500ms ease;

  @media (hover: hover) {
    &:hover{
      background-color: ${Variables.textBlack};
      transition: color 500ms ease,background-color 500ms ease;

      a{
        color: ${Variables.backgroundState};

        .gridWrapper .row .cell{
          background-color: ${Variables.backgroundState};
        }
      }
    }
  }


  a{
    display: block;
    text-transform: uppercase;
    color: ${Variables.textBlack};
    text-decoration: none;
    font-size: 14px;
    letter-spacing: 2px;
    padding: 15px;
    transition:color 1s ease;

    &.facebook{
      text-transform:lowercase;
      font-size:18px;

      @media only screen and (max-width:468px){
        font-size:12px;
      }
    }

    .gridWrapper{
      .row{
        line-height:1;
        height:5px;

        &:nth-of-type(2){
          margin:2px 0;
        }
        .cell{
          height:5px;
          width:5px;
          display:inline-block;
          vertical-align:top;
          background-color:${Variables.textBlack};
          transition:background-color 1s ease;

          &:nth-of-type(2){
            margin:0 2px;
          }
        }

        @media only screen and (max-width:468px){
          height:3px;

          .cell{
            height:3px;
            width:3px;
          }
        }
      }
    }

    @media only screen and (max-width:468px){
      font-size:12px;
    }
  }
`;
