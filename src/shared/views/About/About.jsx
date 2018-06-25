import React from 'react';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet';

import {
  ViewWrapper
} from '../index';

import {
  Consumer
} from '../../context/Context.jsx';


export default class Archive extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    setTimeout(() =>{
      // $('.page.about .pageContainer').removeClass('render');
    },250)
  }

  componentWillMount(){
  }

  componentWillUnmount(){
  }


  render(){
    return (
      <ViewWrapper page="about">
        <Helmet title="About - Chicago Wedding & Portrait Photographer" />

        <Consumer>
          {(context) => (
            <p>I'm a child of the {context.state.location}</p>
          )}
        </Consumer>
      </ViewWrapper>
    )
  }
}
