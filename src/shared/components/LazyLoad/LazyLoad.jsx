import React from 'react';

import styled, { css } from 'styled-components';

import { Viewport, debounce } from '../../utils';

export default class LazyLoad extends React.Component{
	constructor(props) {
		super(props);
		this.lazyRef = React.createRef();
		this.state = {
			lazyLoaded: false
		}
	}

	componentDidMount(){
		if (!Viewport.isTopInViewport(this.lazyRef.current)) {
			this.bindScroll();
		} else {
			this.unbindScroll();
			this.loadImage(this.props.src);
		}
	}

	bindScroll() {
		document.querySelector(this.props.scrollListener).addEventListener('scroll', this.scrollDebounce, false);
		//just in case if it's 'lazyLoaded', hide it
		this.setState({
			lazyLoaded: false
		})
	}

	unbindScroll() {
		document.querySelector(this.props.scrollListener).removeEventListener('scroll', this.scrollDebounce, false);
	}

	componentWillUnmount() {
		this.unbindScroll();
	}


	scrollDebounce = debounce(() => {
		if (Viewport.isTopInViewport(this.lazyRef.current)) {
			this.loadImage(this.props.src);
		}
	}, 100);

	loadImage = (src, callback = () => {}) => {
		const img = new Image();
		img.src = src || this.props.src;
		img.onload = () => {
			setTimeout(() => {
				this.setState({
					lazyLoaded: true
				}, () => {
					callback();
				})
			}, 200);
		};
	}

	render(){
		return(
			<LazyLoadComponent
				innerRef={this.lazyRef}
				lazyLoaded={this.state.lazyLoaded}>
					{this.props.children}
			</LazyLoadComponent>
		)
	}
}

const LazyLoadComponent = styled.div`
	${props => css`
		opacity: ${props.lazyLoaded ? 1 : 0};
	`}
	transition: opacity 500ms ease;
`
