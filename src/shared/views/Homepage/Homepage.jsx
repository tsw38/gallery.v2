import React from 'react';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet';
import styled, { css } from 'styled-components';
import classNames from 'classnames';

import {
  ViewWrapper
} from '../index';

import {
  Consumer
} from '../../context/Context.jsx';

import { ObjectUtil } from '../../utils';

class Homepage extends React.Component{
  constructor(props){
    super(props);
    const { state, actions } = this.props;

    this.state = state.homepage ? {
      ...state.homepage,
      active: false
    } : actions.HomepageActions.stateManager.initState()
  }

  async componentWillReceiveProps(nextProps){
    const parentState  = await nextProps.getParentState('homepage');
    const stateChanged = ObjectUtil.compare(this.state, parentState).changed;
    if(stateChanged) {
      this.setState({
        ...this.state,
        ...parentState
      });
    }
  }


  async componentDidMount(){
    const {
      actions,
      stateUpdater
    } = this.props;
    const {HomepageActions, GlobalActions} = actions;

    if(this.state.images.length === 0){

      const images = await GlobalActions.imagesHelper.getAllImages();
      this.setState({
        ...this.state,
        images
      })
      await stateUpdater('homepage', {
        ...this.state,
        images
      });
    }
    setTimeout(async () => {
      await this.props.actions.HomepageActions.slideshow.start(this.props);
    }, 0);
  }

  async componentWillUnmount(){
    await this.props.actions.HomepageActions.slideshow.stop(this.props);
  }

  render(){
    return (
      <ViewWrapper page="homepage"
        render={true}>
        <Helmet title="Chicago Wedding & Portrait Photographer" />
        <BackgroundWrapper>
          <Background
            className={classNames({
              'active': this.state.active === 0,
              'pending': this.state.pending === 0
            })}
            active={this.state.active === 0}
            pending={this.state.pending === 0}
            image={this.state.background[0]}
          />
          <Background
            className={classNames({
              'active': this.state.active === 1,
              'pending': this.state.pending === 1
            })}
            active={this.state.active === 1}
            pending={this.state.pending === 1}
            image={this.state.background[1]}
          />
        </BackgroundWrapper>
      </ViewWrapper>
    )
  }
}

const BackgroundWrapper = styled.div`
  height:inherit;
  width:inherit;
`;

const Background = styled.div`
  position:absolute;
  top:0;bottom:0;
  left:0; right:0;
  background-size: cover;
  background-repeat:no-repeat;
  background-position: center 25%;
  ${props => css`
      background-image: url('${props.image}');
    `
  }
  ${props => (!props.active && !props.pending) && css`
      transition: transform 0s cubic-bezier(0.35, 0.35, 1, 1);
      opacity: 0;
      transform: scale(1);
  `}
  ${props => (props.active || props.pending) && css`
      transition: opacity 1s ease-in, transform 30s cubic-bezier(0.35, 0.35, 1, 1);
      transform: scale(1.25);
  `}
  ${props => (props.active && !props.pending) && css`
      opacity: 1;
  `}
  ${props => (!props.active && props.pending) && css`
      opacity:0;
  `}
`;

export default props => (
  <Consumer>
    {context => {
      return <Homepage {...props} {...context} />
    }}
  </Consumer>
)
