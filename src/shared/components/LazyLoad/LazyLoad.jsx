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
    this.loadImage = this.loadImage.bind(this);
	}

	async componentDidMount(){
    if(this.props.bypassViewport){
      // console.warn('bypassing viewport check');
      this.loadImage(this.props['data-src']);
    } else {
      if (!Viewport.isTopInViewport(this.lazyRef.current)) {
  			this.bindScroll();
  		} else {
  			this.unbindScroll();
  			this.loadImage(this.props['data-src']);
  		}
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
			this.loadImage(this.props['data-src']);
		}
	}, 100);

	loadImage = (src) => {
    // console.warn('lazy load working overtime', src);
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

const LazyLoadComponent = styled.div`
background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=);
background-size:cover;
background-repeat:no-repeat;
background-position:top center;
transition: opacity 500ms ease;
opacity:0;

${props => props.lazyLoaded && css`
	opacity: 1;
  background-image: url(${props['data-src']});
`}
`
