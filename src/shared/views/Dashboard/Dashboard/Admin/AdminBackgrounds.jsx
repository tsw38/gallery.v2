import React from 'react';

import { Helmet } from 'react-helmet';
import styled, { css } from 'styled-components';

import { Consumer } from '../../../../context/Context.jsx';
import { Variables, ObjectUtil } from '../../../../utils';

import Thumbnail from './components/Thumbnails.jsx';

class AdminBackgrounds extends React.Component{
  state={
    images: []
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
      this.setState({
        images
      })
      //TODO: set images inside provider,
      //TODO: display images on page
    }
  }
  render(){
    return (
	     <BackgroundImageWrapper>
        {this.state.images && this.state.images.map(imageProps =>
          <Thumbnail
            key={`${imageProps.photoID}`}
            {...imageProps}/>
        )}
       </BackgroundImageWrapper>
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


const BackgroundImageWrapper = styled.div`
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  overflow-y:scroll;
`;
