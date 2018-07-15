import React from 'react';

import styled, { css } from 'styled-components';

import { Variables, ObjectUtil } from '../../utils';
import { LazyLoad } from '../../components';
export default class GalleryImage extends React.Component{
	render(){
		const photoUrl = `${Variables.origin}/api/images/${this.props.directory}/${this.props.fileName}`;

		return(
			<LazyLoad
				data-src={photoUrl}
				scrollListener={'.gallery'}>
				<ZoomWrapper>
					<GalleryImageComponent
						onClick={this.props.onClick}/>
				</ZoomWrapper>
			</LazyLoad>
		)
	}
}

const ZoomWrapper = styled.div`
	position:relative;
	display: inline-block;
	width:100%;
	max-height: 200px;
  overflow: hidden;
  height: calc(33vw - 10px);
	cursor: pointer;

	@media only screen and (max-width:500px){
		max-height:none;
		height: 40vh;
	}
`

const GalleryImageComponent = styled.div`
	height: 100%;
	max-height:inherit;
	min-height:calc(33vw - 10px);
	transition: max-height 500ms ease, transform 200ms ease-in-out;
	transform-origin: 50% 50%;

	@media (hover: hover) {
		${ZoomWrapper}:hover & {
			transform: scale(1.1);
		}
	}
`
