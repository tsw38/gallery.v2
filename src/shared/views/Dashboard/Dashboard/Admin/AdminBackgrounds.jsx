import React from 'react';

import { Helmet } from 'react-helmet';
import styled, { css } from 'styled-components';

import { Consumer } from '../../../../context/Context.jsx';
import { Variables, ObjectUtil } from '../../../../utils';

class AdminBackgrounds extends React.Component{
  state={

  };

  async componentWillMount(){
    const signedIn = ObjectUtil.deepFind(this.props.state, 'cookies.galleryUser');
    const userData = JSON.parse(atob(signedIn));

    if(userData.accessLevel !== 1){
      global.location = '/';
    }
  }

  async componentDidMount(){
    const signedIn = ObjectUtil.deepFind(this.props.state, 'cookies.galleryUser');
    const userData = JSON.parse(atob(signedIn));

    if(userData.accessLevel === 1){
      const { actions } = this.props;
      const { GlobalActions } = actions;
      const images = await GlobalActions.imagesHelper.getAllImages();
      //TODO: set images inside provider,
      //TODO: display images on page
    }
  }
  render(){
    return (
	  <div>
		  <h1>AdminBackgrounds</h1>
	  </div>
    )
  }
}

export default props => (
  <Consumer>
    {context => {
      return <AdminBackgrounds {...props} {...context} />
    }}
  </Consumer>
)
