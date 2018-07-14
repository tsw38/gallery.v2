import React from 'react';
import styled, { css } from 'styled-components';

import {
	Link
} from 'react-router-dom';

import {
	Variables
} from '../../utils';

export default class Thumbnail extends React.Component{
	constructor(props){
		super(props);
	}
	render() {
		const {
			url,
			albumName,
			photoName
		} = this.props;

		const image = `${Variables.origin}/api/images/${url}/${photoName}`;
		return (
			<StyledLink to={url} onClick={this.props.onClick}>
				<ThumbFigure>
					<ThumbImage src={image} alt={photoName} />
					<HoverText>
						<span>{albumName}</span>
					</HoverText>
				</ThumbFigure>
			</StyledLink>
		)
	}
}

const StyledLink = styled(Link)`
	display:inline-block;
`

const ThumbFigure = styled.figure`
	display:inline-block;
	position:relative;
`

const ThumbImage = styled.img`
	width:100%;
	vertical-align:middle;
`

const HoverText = styled.figcaption`
	position:absolute;
	top:0;
	left:0;
	right:0;
	bottom:0;

	span{
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
			${ThumbFigure}:hover & {
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
