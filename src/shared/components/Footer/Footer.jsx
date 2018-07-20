import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Cookie from 'js-cookie';
import {
  Variables,
  ObjectUtils
} from '../../utils';


export default class Footer extends Component{
  constructor(props){
    super(props);
    this.state = {
      signedIn: false
    }
  }
  componentDidMount(){
    if(global.window && Cookie.get(process.env.COOKIE_NAME)){
      this.setState({
        signedIn: true
      })
    } else {
      this.setState({
        signedIn: false
      });
    }
  }
  render(){
    return (
      <StyledFooter>
        {this.state.signedIn &&
          <LeftContent>
            <StyledLink to={'/dashboard'} title="Dashboard">
              <StyledSVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M20.043 11.76c-.141-.427-.314-.844-.516-1.242l-2.454 1.106c.217.393.39.81.517 1.242l2.453-1.106zm-12.572-.904c.271-.354.579-.674.918-.957l-1.89-1.968c-.328.293-.637.614-.919.957l1.891 1.968zm1.714-1.514c.38-.221.781-.396 1.198-.523l-1.033-2.569c-.412.142-.813.317-1.2.524l1.035 2.568zm-2.759 3.615c.121-.435.287-.854.498-1.25l-2.47-1.066c-.196.403-.364.823-.498 1.25l2.47 1.066zm9.434-6.2c-.387-.205-.79-.379-1.2-.519l-1.023 2.573c.418.125.82.299 1.2.519l1.023-2.573zm2.601 2.131c-.281-.342-.59-.664-.918-.957l-1.891 1.968c.34.283.648.604.919.957l1.89-1.968zm-5.791-3.06c-.219-.017-.437-.026-.648-.026-.213 0-.432.009-.65.026v2.784c.216-.025.434-.038.65-.038.215 0 .434.013.648.038v-2.784zm11.33 8.172c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 2.583.816 5.042 2.205 7h19.59c1.389-1.958 2.205-4.417 2.205-7zm-9.08 5c-.007-1.086-.606-2.031-1.496-2.522l-1.402-6.571-1.402 6.571c-.889.491-1.489 1.436-1.496 2.522h-5.821c-.845-1.5-1.303-3.242-1.303-5 0-5.514 4.486-10 10-10s10 4.486 10 10c0 1.758-.458 3.5-1.303 5h-5.777z"/>
              </StyledSVG>
            </StyledLink>
          </LeftContent>
        }
        <RightContent>
          <StyledLink to={'//instagram.com/tylerscottt/'} target="_blank" title="Instagram">
            <StyledSVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </StyledSVG>
          </StyledLink>
        </RightContent>
      </StyledFooter>
    )
  }
}

const StyledFooter = styled.footer`
  position:absolute;
  bottom:0; right:0;
  z-index:1000;
  text-align:right;
  display:block;
  left:0;
`;

const SubMenuContent = styled.div`
  position:relative;
  width: 50%;
  height: inherit;
  vertical-align: top;
  display:inline-block;
`;

const StyledLink = styled(Link)`
  max-height:15px;
  height:15px;
  max-width:15px;
  width:15px;
  display:block;
  height:100%;
  padding:5px;
`;

const LeftContent  = SubMenuContent.extend`
  ${StyledLink} {
    margin: 0 auto 0 0;
    background-color:${Variables.backgroundState};
    transition:background-color 500ms ease;

    @media (hover: hover) {
      &:hover{
        background-color:${Variables.textBlack};
      }
    }
  }

`;
const RightContent = SubMenuContent.extend`
  ${StyledLink} {
    margin: 0 0 0 auto;
  }
`;


const Trick = styled.span`
  display:block;
  height:0;
  width:0;
  visibility:hidden;
`;

const StyledSVG = styled.svg`
  fill:${Variables.textBlack};
  height:100%;
  width:100%;
  transition: fill 100ms ease-in;

  @media (hover: hover) {
    ${StyledLink}:hover & {
      fill:${Variables.backgroundState};
    }
  }
`;
