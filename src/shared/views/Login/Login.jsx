import React, { Component } from 'react';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet';

import {
  ViewWrapper
} from '../index';

import {
  Consumer
} from '../../context/Context.jsx';

export default class Login extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
  }

  componentWillMount(){
  }

  componentWillUnmount(){
  }


  render(){
    return (
      <ViewWrapper page="login" hideMenu="true">
        <Helmet title="Login - Chicago Wedding & Portrait Photographer" />
        <div className="pageContainer render">
          <div className="login-container">
            <div className="wrapper">
            </div>
          </div>
        </div>
        <Consumer>
          {(context) => (
            <p>I'm a child of the {context.state.location}</p>
          )}
        </Consumer>
      </ViewWrapper>
    )
  }
}
