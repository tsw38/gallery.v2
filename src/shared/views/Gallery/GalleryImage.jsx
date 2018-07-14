import React from 'react';

import styled, { css } from 'styled-components';

import { Variables, ObjectUtil } from '../../utils';
import { LazyLoad } from '../../components';
export default class GalleryImage extends React.Component{
	render(){
		const photoUrl = `${Variables.origin}/api/images/${this.props.directory}/${this.props.fileName}`;

		return(
			<LazyLoad
				src={photoUrl}
				scrollListener={'.gallery'}>
				<ZoomWrapper>
					<GalleryImageComponent
						backgroundImage={photoUrl}
						onClick={this.props.onClick}>
						<img src={photoUrl} />
					</GalleryImageComponent>
				</ZoomWrapper>
			</LazyLoad>
		)
	}
}

const ZoomWrapper = styled.div`
	max-width:100%;
	position:relative;
	display: inline-block;
	height: 100%;
	max-height:180px;
	overflow:hidden;
	cursor: pointer;

	@media only screen and (max-width:500px){
		max-height:250px;
	}
`

const GalleryImageComponent = styled.div`
	height: 100%;
	max-height:inherit;
	transition: max-height 500ms ease, transform 200ms ease-in-out;
	${props => css`
		background-image: url(${props.backgroundImage});
		background-size:cover;
		background-repeat:no-repeat;
		background-position:center;
	`}

	img{
		opacity: 0;
	}

	@media (hover: hover) {
		${ZoomWrapper}:hover & {
			transform: scale(1.1);
		}
	}
`
