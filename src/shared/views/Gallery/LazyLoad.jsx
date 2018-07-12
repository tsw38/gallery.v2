import React from 'react';

import styled, { css } from 'styled-components';

import { Variables, ObjectUtil, Viewport, debounce } from '../../utils';



export default class LazyLoad extends React.Component{
	constructor(props) {
		super(props);
		this.lazyRef = React.createRef();
		this.state = {
			lazyLoad: false
		}
	}

	componentDidMount(){
		if (!Viewport.isTopInViewport(this.lazyRef.current)) {
			this.bindScroll();
		} else {
			this.unbindScroll();
		}
	}

	componentWillUnmount() {

	}

	bindScroll() {
		document.querySelector(Variables.scrollMount).addEventListener('scroll', this.scrollDebounce, false);
		this.setState({
			lazyLoad: true
		});
	}

	unbindScroll() {
		document.querySelector(Variables.scrollMount).removeEventListener('scroll', this.scrollDebounce, false);
		this.setState({
			lazyLoad: false
		});
	}

	scrollDebounce = debounce(() => {
		if (Viewport.isTopInViewport(this.lazyRef.current)) {
			this.unbindScroll();
		}
	}, 100);

	componentWillUnmount() {
		this.setState({
			lazyLoad: true
		})
	}
	

	render(){
		return(
			<LazyLoadComponent
				innerRef={this.lazyRef}
				lazyLoad={this.state.lazyLoad}>
				{this.props.children}
			</LazyLoadComponent>
		)
	}
}

const LazyLoadComponent = styled.div`
	${props => css`
		opacity: ${props.lazyLoad ? 0 : 1};
	`}
	transition: opacity 500ms ease;
`