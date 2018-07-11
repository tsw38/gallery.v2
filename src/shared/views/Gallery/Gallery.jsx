import React from 'react';
import uuid from 'uuid/v4';

import { Helmet } from 'react-helmet';
import styled, { css } from 'styled-components';

import { ViewWrapper } from '../index';
import { Consumer } from '../../context/Context.jsx';
import { Variables } from '../../utils';


class Gallery extends React.Component{
  constructor(props){
    super(props);

    const { state, actions } = this.props;
    // console.log(actions.ArchiveActions.stateManager.initGalleryState());
    this.state = state.gallery ? {
      ...state.gallery,
      render: false
    } : actions.ArchiveActions.stateManager.initGalleryState()
  }

  async componentWillMount(){
  }

  async componentDidMount() {
    const {
      actions,
      stateUpdater,
      getParentState
    } = this.props;
    const {ArchiveActions} = actions;

    const parentState = await getParentState();
    await this.props.stateUpdater('gallery', {
      ...this.state,
      navigatedAlbumName: ('gallery' in parentState) ? parentState.gallery.navigatedAlbumName : ''
    });

    if(parentState && parentState.gallery && !parentState.gallery[parentState.gallery.navigatedAlbumName].images){

        const images = await ArchiveActions.gallery.getGallery(parentState.gallery.navigatedAlbumName);
        this.setState({
          ...this.state,
          [parentState.gallery.navigatedAlbumName]: {images}
        })

        await stateUpdater('gallery', {
          ...this.state,
          [parentState.gallery.navigatedAlbumName]: {images}
        });
    }

    setTimeout(async () => {
      await this.props.actions.GlobalActions.page.render(this.props, 'gallery');
    }, 1000);
  }



  async componentWillUnmount() {
    await this.props.stateUpdater('gallery', {
      ...this.state,
      navigatedAlbumName: ''
    });
    await this.props.actions.GlobalActions.page.hide(this.props, 'gallery');
  }

  generateFirstImage() {
    const {navigatedAlbumName} = this.props.state.gallery;
    const firstImage = this.state[navigatedAlbumName].images && this.state[navigatedAlbumName].images[0];
    return firstImage && (
      <FirstGalleryImage>
        <img src={`${Variables.origin}/api/images/${firstImage.url}/${firstImage.photoName}`} alt="" />
        <Overlay>
          <span>{firstImage.albumName}</span>
        </Overlay>
      </FirstGalleryImage>
    )
  }

  generateGallery() {
    const {navigatedAlbumName} = this.props.state.gallery;
    return this.state[navigatedAlbumName].images && this.state[navigatedAlbumName].images.map((image,index) => {
      return (
        <GalleryImage
          backgroundImage={`${Variables.origin}/api/images/${image.url}/${image.photoName}`}
          key={`${this.props.state.gallery.key}-${index}`}>
          <img src={`${Variables.origin}/api/images/${image.url}/${image.photoName}`} alt="" />
        </GalleryImage>
      )
    });
  }

  render(){
    return (
      <ViewWrapper page="gallery">
        <Helmet title="Gallery - Chicago Wedding & Portrait Photographer" />
        <GalleryWrapper>
          {this.generateFirstImage()}
          <Subgrid>
            {this.generateGallery()}
          </Subgrid>
        </GalleryWrapper>
      </ViewWrapper>
    )
  }
}

export default props => (
  <Consumer>
    {context => {
      return <Gallery {...props} {...context} />
    }}
  </Consumer>
)

const GalleryWrapper = styled.div`
  width:80vw;
  max-width: 750px;
  height:100%;
  margin: 0 auto;
  padding-top:45px;
`

const FirstGalleryImage = styled.figure`
  max-width:100%;
  max-height:400px;
  position:relative;
  margin-bottom:10px;
  overflow:hidden;

  img{
    max-width:inherit;
    filter: blur(2px);
  }
`;

const Overlay = styled.figcaption`
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color: rgba(0,0,0, 0.5);
  overflow:hidden;

  span{
		height:100%;
		width:100%;
		justify-content: center;
		display: flex;
		align-items: center;
		text-transform: uppercase;
		color: white;
		font-size: 30px;
    letter-spacing:3px;
  }

`

const Subgrid = styled.div`
  display:grid;
  grid-gap: 10px;
  grid-template-columns: calc(33% - 10px) 34% calc(33% - 10px);
  width:100%;
`;

const GalleryImage = styled.div`
  max-width:100%;
  position:relative;
  display: inline-block;
  height: 100%;
  max-height:180px;
  overflow:hidden;
  ${props => css`
    background-image: url(${props.backgroundImage});
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
  `}

  img{
    max-width:100%;
    height:100%;
    width:auto;
    opacity:0;
  }

  // &:nth-of-type(3n+3){
  //   margin: 0 3%;
  // }


`
