import React, { Component } from 'react';
import uuid from 'uuid/v4';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet';

import { ViewWrapper } from '../index';
import { Consumer } from '../../context/Context.jsx';
import { Variables } from '../../utils';


class Archive extends Component{
  constructor(props){
    super(props);
    const { state, actions } = this.props;

    this.state = state.archive ? {
      ...state.archive
    } : actions.ArchiveActions.stateManager.initState()
  }

  async componentWillMount(){
  }

  async componentDidMount(){
    console.log("THIS IS THE GALLERY", this.props.state.archive);
    console.log("THIS IS THE INTERNAL STATE", this.state);
  }

  async componentWillUnmount(){
  }

  generateGallery(){
    // const { appStore } = this.props;
    // let imageArray =[];
    // if(appStore.archiveImageOrder){
    //   imageArray = appStore.archiveImageOrder.map((image) => {
    //     let thumb = 'https://tylerscott.gallery/api/images/' + image.replace(/\.jpg/g,'-thumb.jpg');
    //     return (
    //       <div key={uuid()} className="grid-item thumbnail loading">
    //         <div className="background-wrapper--1" style={{backgroundImage: `url(${thumb})`}} />
    //         <div className="background-wrapper--2" style={{backgroundImage: `url(${appStore.origin}/api/images/${image})`}} />
    //       </div>
    //     );
    //   })
    // } else if(/^archive$/.test(appStore.type)){
    //   imageArray = appStore.images.map((image,index) => {
    //     let thumb = 'https://tylerscott.gallery/api/images/' + image.replace(/\.jpg/g,'-thumb.jpg');
    //     return (
    //       <div key={uuid()} className="grid-item thumbnail loading">
    //         <div className="background-wrapper--1" style={{backgroundImage: `url(${thumb})`}} />
    //         <div className="background-wrapper--2" style={{backgroundImage: `url(${appStore.origin}/api/images/${image})`}} />
    //       </div>
    //     );
    //   })
    // }
    // return imageArray;
  }

  render(){
    const {
      location
    } = this.props;

    return (
      <ViewWrapper page="archive">
        <Helmet title="Archive - Chicago Wedding & Portrait Photographer" />
        <div className="grid">
          {this.generateGallery()}
        </div>
        THIS IS THE ARCHIVE PAGE
      </ViewWrapper>
    )
  }
}

export default props => (
  <Consumer>
    {context => {
      return <Archive {...props} {...context} />
    }}
  </Consumer>
)
