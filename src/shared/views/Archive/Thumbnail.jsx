import React from 'react';
import styled, { css } from 'styled-components';

import {
	Link
} from 'react-router-dom';

import {
	Variables
} from '../../utils';

import {
	LazyLoad
} from '../../components';
export default class Thumbnail extends React.Component{
	render() {
		const {
			url,
			albumName,
			photoName
		} = this.props;

		if(!photoName) return null;

		const image = `${Variables.origin}/api/images/${url}/${photoName}`;
		
		return (
			<StyledLink to={url} onClick={this.props.onClick}>
				<LazyLoad
					data-src={image}
					scrollListener={'.archive'}>
					<HoverText>
						<span>{albumName}</span>
					</HoverText>
				</LazyLoad>
			</StyledLink>
		)
	}
}

const StyledLink = styled(Link)`
	display:inline-block;
	overflow: hidden;
	height: 25vw;
	position:relative;

	@media only screen and (max-width: 500px){
		height:45vh;
	}
`

const ThumbnailWrapper = styled.div`
	display:inline-block;
	position:relative;

	height:100%;

	background-image: url(${props => props.image || ''});
	background-repeat: no-repeat;
	background-size:cover;
	background-position:top center;

`

const ThumbImage = styled.img`
	width:100%;
	vertical-align:middle;
	opacity:0;
`

const HoverText = styled.div`
	position:absolute;
	top:0;
	left:0;
	right:0;
	bottom:0;

	span{
		position:relative;
		display:block;
		height:100%;
		width:100%;
		justify-content: center;
		display: flex;
		align-items: center;
		text-transform: uppercase;
		background-color: rgba(0,0,0,0);
		transform: scale(1);
		color: transparent;
		font-size: 20px;
		transition: color 500ms ease, transform 500ms ease, background-color 500ms ease;

		@media (hover: hover) {
			${StyledLink}:hover & {
				background-color: rgba(255, 255, 255, 0.75);
				transform: scale(0.9);
				color: ${Variables.textBlack};
			}
		}
	}

	@media only screen and (max-width: 800px){
		top:initial;
		left: initial;
		height: 20px;
		right: -2px;
		bottom: -1px;

		span{
			display:inline;
			font-size:14px;
			background-color: rgba(255, 255, 255, 1);
			margin: 0 0 0 auto;
			text-align: center;
			vertical-align:middle;
			max-width:56%;
			max-height:20px;
			padding:2px 10px;
			color: ${Variables.textBlack};
		}

	}
`
