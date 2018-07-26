import React from 'react';

import { Helmet } from 'react-helmet';
import styled, { css } from 'styled-components';

import { ViewWrapper } from '../index';
import HeaderImage from './HeaderImage.jsx';
import GalleryImage from './GalleryImage.jsx';

import { Consumer } from '../../context/Context.jsx';
import { Variables, ObjectUtil } from '../../utils';

class Gallery extends React.Component{
  constructor(props){
    super(props);
    const { state, actions } = this.props;

    this.state = state.gallery ? {
      ...state.gallery,
      render: false,
      activeLightbox:false,
      activeIndex: -1
    } : actions.ArchiveActions.stateManager.initGalleryState()
  }

  async componentWillReceiveProps(nextProps){
    const {
      getParentState
    } = nextProps;

    const parentState = await getParentState('gallery');

    const stateChanged = ObjectUtil.compare(this.state, parentState).changed;
    if(stateChanged){
      this.setState({
        ...this.state,
        ...parentState
      });
    }
  }

  async componentDidMount() {
    const {
      actions,
      stateUpdater,
      getParentState
    } = this.props;

    const parentState = await getParentState('gallery');
    const albumName   = (parentState) ? parentState.albumName : this.state.albumName;


    if (!ObjectUtil.deepFind(parentState, `${albumName}`)) {
      const images = await actions.ArchiveActions.gallery.getGallery(albumName);
      if(!images.length){ //PHONEY GALLERY
        global.location = '/archive';
      } else {
        this.setState({
          ...this.state,
          [albumName]: {
            images
          },
        }, async () => {
          setTimeout(async () => {
            await stateUpdater('gallery', {
              ...this.state,
              render: true
            });
          }, 0);
        })
      }
    } else {
      setTimeout(async () => {
        await stateUpdater('gallery', {
          ...this.state,
          render: true
        });
      }, 100);
    }
  }

  async componentWillUnmount() {
    const {
      stateUpdater,
      actions
    } = this.props;

    await stateUpdater('gallery', {
      ...this.state,
      albumName: '',
      render: false,
      activeLightbox: false,
      activeIndex: -1
    });

    await actions.GlobalActions.page.hide(this.props, 'gallery');
  }

  imageClickWrapper = (imageIndex) => async () => {
    const {actions, stateUpdater, getParentState} = this.props;
    const { gallery } = actions.ArchiveActions;

    gallery.handleImageClick(imageIndex, this.props);
  }

  generateGallery() {
    const {albumName} = this.state;
    const { ArchiveActions } = this.props.actions;

    return this.state[albumName] && this.state[albumName].images.map((image, index) =>
      <GalleryImage
        key={`${this.props.state.gallery.key}-${index}`}
        directory={image.url}
        onClick={this.imageClickWrapper(index)}
        fileName={image.photoName} />
    );
  }

  render(){
    const {albumName} = this.state;
    const firstImage = this.state[albumName] && this.state[albumName].images.find(image => image.isThumbnail);
    return (
      <ViewWrapper
        page="gallery"
        render={this.state.render}
        blur={this.state.activeLightbox}>
        <Helmet title={`${firstImage ? (firstImage.albumName + ' ') : ''}Gallery - Chicago Wedding & Portrait Photographer`} />
        <GalleryWrapper>
          {firstImage &&
            <HeaderImage
              directory={firstImage.url}
              url={firstImage.photoName}
              albumName={firstImage.albumName}
            />
          }
          <Subgrid>
            { this.generateGallery() }
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
  height:auto;
  margin: 0 auto;
  padding-top:45px;
`

const Subgrid = styled.div`
  display:grid;
  grid-gap: 10px;
  grid-template-columns: calc(33% - 10px) 34% calc(33% - 10px);
  width:100%;

  @media only screen and (max-width:800px){
    grid-template-columns: calc(50% - 5px) calc(50% - 5px);
  }

  @media only screen and (max-width:500px){
    grid-template-columns: 100%;
  }
`;
