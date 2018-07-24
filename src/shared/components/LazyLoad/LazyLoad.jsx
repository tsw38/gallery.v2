import React from 'react';

import styled, { css } from 'styled-components';

import { Viewport, debounce } from '../../utils';

export default class LazyLoad extends React.Component{
	lazyRef = React.createRef();
	state = {
		lazyLoaded: false
	};

	componentDidMount(){
		if(this.props.bypassViewport){
			this.loadImage(this.props['data-src']);
		} else {
			if (!Viewport.isTopInViewport(this.lazyRef.current)) {
				this.bindScroll();
			} else {
				this.unbindScroll();
				this.setState({
					lazyLoaded: true
				});
			}
		}

	}

	bindScroll() {
		document.querySelector(this.props.scrollListener).addEventListener('scroll', this.scrollDebounce);
		//just in case if it's 'lazyLoaded', hide it
		this.setState({
			lazyLoaded: false
		})
	}

	unbindScroll() {
		document.querySelector(this.props.scrollListener).removeEventListener('scroll', this.scrollDebounce);
	}

	componentWillUnmount() {
		this.unbindScroll();
	}

	scrollDebounce = debounce(() => {
		if (Viewport.isTopInViewport(this.lazyRef.current)) {
			this.loadImage(this.props['data-src']);
		}
	}, 100);

	loadImage = (src) => {
		if(!this.lazyRef.current) return;
		const img = new Image();
		img.src = src || this.props['data-src'];
		img.onload = () => {
			this.setState({
				lazyLoaded: true
			})
		};
	}

	render(){
		return(
			<LazyLoadComponent
        		data-src={this.props['data-src']}
				innerRef={this.lazyRef}
				lazyLoaded={this.state.lazyLoaded}>
					{this.props.children}
			</LazyLoadComponent>
		)
	}
}

const LazyLoadComponent = styled.div.attrs({
	style: (props) => ({
		'backgroundImage': (!props.lazyLoaded)
			? 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=)'
			: `url(${props['data-src']})`,
		'opacity': (!props.lazyLoaded) ? 0 : 1
	})
})`
position:relative;
background-size:cover;
background-repeat:no-repeat;
background-position:top center;
width:100%;
height:100%;
transition: opacity 500ms ease;
`
