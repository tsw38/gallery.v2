import React from 'react';

import { Helmet } from 'react-helmet';
import styled, { css } from 'styled-components';

import { Consumer } from '../../../context/Context.jsx';
import { Variables, ObjectUtil } from '../../../utils';


class Overview extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
	  <div>
		<h1>OVERVIEW</h1>
	  </div>
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