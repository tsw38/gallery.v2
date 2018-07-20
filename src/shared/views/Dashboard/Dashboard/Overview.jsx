import React from 'react';

import { Helmet } from 'react-helmet';
import styled, { css } from 'styled-components';

import { Consumer } from '../../../context/Context.jsx';
import { Variables, ObjectUtil } from '../../../utils';

import AdminOverview from './Admin/AdminOverview.jsx';
import UserOverview from './User/UserOverview.jsx';
import atob from 'atob';
import btoa from 'btoa';

class Overview extends React.Component{
  state = {
    shouldRender: false
  }
  componentWillMount(){
    const signedIn = ObjectUtil.deepFind(this.props.state, 'cookies.galleryUser');
    const userData = JSON.parse(atob(signedIn));
    this.setState({
      'accessLevel': btoa(userData.accessLevel)
    })
  }
  render(){
    return (
      <React.Fragment>
        {(this.state['accessLevel'] === btoa('1')) ? (
          <AdminOverview />
        ) : (
          <UserOverview />
        )}
      </React.Fragment>
    )
  }
}

export default props => (
  <Consumer>
    {context => {
      return <Overview {...props} {...context} />
    }}
  </Consumer>
)
