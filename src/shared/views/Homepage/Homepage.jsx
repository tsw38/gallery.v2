import React from 'react';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet';

import {
  ViewWrapper
} from '../index';

import {
  Consumer
} from '../../context/Context.jsx';


export default class Homepage extends React.Component{
  componentWillMount(){

  }

  componentDidMount(){
    // const { appStore } = this.props;
    // if(appStore.loadedImages.keys().length){
    //   $('.homepage .background').removeClass('active inactive');
    //
    //   setTimeout(() => { $('.homepage .background').eq(appStore.loadedImageIndex).addClass('active') },0)
    // }
    //
    // appStore.preloadAllImages();

    // this.setState({
    //   interval: setInterval(() => {
    //     appStore.setCurrentImage();
    //   },9500)
    // })
  }

  componentWillUnmount(){
    // clearInterval(this.state.interval);
  }


  getBackgroundImage(isOdd){
    // return this.props.appStore.loadedImage[((isOdd) ? 1 : 0)]
  }

  render(){
    return (
      <ViewWrapper page="homepage">
        <Helmet title="Chicago Wedding & Portrait Photographer" />
        <div className="background-wrapper">
          <div className="background" />
          <div className="background" />
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
