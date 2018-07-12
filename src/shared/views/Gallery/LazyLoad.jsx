import React from 'react';

import styled, { css } from 'styled-components';

import { Variables, ObjectUtil, Viewport, debounce } from '../../utils';



export default class LazyLoad extends React.Component{
	constructor(props) {
		super(props);
		this.lazyRef = React.createRef();
		this.state = {
			scrollEvent: "",
			hidden: true
		}
	}

	scrollEvent = null;

	componentDidMount(){
		if (!Viewport.isTopInViewport(this.lazyRef.current)) {
			this.bindScroll();
		}
	}

	componentWillUnmount() {

	}

	bindScroll() {
		this.scrollEvent = document.querySelector(Variables.scrollMount).addEventListener('scroll', this.debounceHelper());
	}

	debounceHelper(){
		return debounce(() => {
			if (Viewport.isTopInViewport(this.lazyRef.current)) {
				console.log('IN VIEWPORT', this.lazyRef.current);
				
			}
		},250);
	}
	

	render(){
		return(
			<LazyLoadComponent
				innerRef={this.lazyRef}>
				{this.props.children}
			</LazyLoadComponent>
		)
	}
}

const LazyLoadComponent = styled.div `

`