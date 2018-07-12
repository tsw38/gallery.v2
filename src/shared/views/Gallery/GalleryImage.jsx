import React from 'react';

import styled, { css } from 'styled-components';

import { Variables, ObjectUtil } from '../../utils';
import LazyLoad from './LazyLoad.jsx';

export default class GalleryImage extends React.Component{
	render(){
		const photoUrl = `${Variables.origin}/api/images/${this.props.directory}/${this.props.fileName}`;

		return(
			<LazyLoad>
				<ThisGalleryImage
					image={photoUrl}>
					<img src={photoUrl} alt="" />
				</ThisGalleryImage>
			</LazyLoad>
		)
	}
}

const ThisGalleryImage = styled.div `
  max-width:100%;
  position:relative;
  display: inline-block;
  height: 100%;
  max-height:180px;
  overflow:hidden;

  ${props => css`
    background-image: url(${props.image});
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
  `}

  img{
    max-width:100%;
    height:100%;
    width:auto;
    opacity:0;
  }
`