import React from 'react';

import styled, { css } from 'styled-components';

import { Variables, ObjectUtil } from '../../utils';
import { LazyLoad } from '../../components';

export default class HeaderImage extends React.Component{
	render(){
    const {
      directory,
      url,
      albumName
    } = this.props;

		const photoUrl = `${Variables.origin}/api/images/${directory}/${url}`;

		return(
			<LazyLoad
				data-src={photoUrl}
				scrollListener={'.gallery'}>
          <FirstGalleryImage>
            <img src={photoUrl} alt="" />
            <Overlay>
              <span>{albumName}</span>
            </Overlay>
          </FirstGalleryImage>
			</LazyLoad>
		)
	}
}

const FirstGalleryImage = styled.figure`
  max-width:100%;
  max-height:400px;
  position:relative;
  margin-bottom:10px;
  overflow:hidden;
  transition: max-height 500ms ease;

  img{
    max-width:inherit;
    filter: blur(2px);
    transition: filter 500ms ease;
  }

  @media only screen and (max-width:500px){
    max-height:75px;

    img{
      filter: blur(4px);
    }
  }
`;

const Overlay = styled.figcaption`
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color: rgba(0,0,0, 0.5);
  overflow:hidden;
  transition: background-color 500ms ease;

  span{
		height:100%;
		width:100%;
		justify-content: center;
		display: flex;
		align-items: center;
		text-transform: uppercase;
		color: white;
		font-size: 30px;
    letter-spacing:3px;
    text-align:center;
  }

  @media only screen and (max-width:500px){
    background-color: rgba(0,0,0, 0.75);

    span{
      font-size: 20px;
    }
  }
`
