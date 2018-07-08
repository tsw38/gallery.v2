import React, { Component } from 'react';
import uuid from 'uuid/v4';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet';

import {
  ViewWrapper
} from '../index';

import {
  Consumer
} from '../../context/Context.jsx';


// import imagesLoaded from 'imagesloaded';
export default class Archive extends Component{
  constructor(props){
    super(props);
    this.state = {
      loadingImages:''
    }
  }

  onImageLoaded(){
    // if(!$('.grid-item').length){
    //   setTimeout(() => {this.onImageLoaded();},0)
    // } else {
    //   $('.grid-item .background-wrapper--1').imagesLoaded({ background:true })
    //   .progress((imgLoad, image) => {
    //     $(image.element).parent().css({ 'background-image':`url(${image.url})` })
    //     $(image.element).parent().removeClass('loading');
    //   });
    //   setTimeout(() => {
    //     $('.grid-item .background-wrapper--2').imagesLoaded({ background:true })
    //     .progress((imgLoad, image) => {
    //       $(image.element).parent().css({ 'background-image':`url(${image.url})` })
    //       $(image.element).parent().removeClass('thumbnail');
    //     });
    //   },2000)
    // }
  }

  componentWillMount(){
    // const { appStore } = this.props;
    // if(!/^archive$/.test(appStore.type)){
    //   appStore.getArchiveOrder();
    // }
  }

  componentDidMount(){
    // console.log('Archive page props', this.props);
    // const { appStore } = this.props;

    // imagesLoaded.makeJQueryPlugin($);
    // jQueryBridget('masonry', Masonry, $);


    // this.onImageLoaded();


    // var $grid = $(".grid").masonry({
    //   itemSelector: '.grid-item'
    // });

  }

  componentWillUnmount(){
    // $('.grid-item.loading img').off('load');
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
        <Consumer>
          {context => (
            <p>I'm a child of the {location.pathname}</p>
          )}
        </Consumer>
      </ViewWrapper>
    )
  }
}
