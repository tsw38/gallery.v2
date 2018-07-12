import React from 'react';

import { Helmet } from 'react-helmet';
import styled, { css } from 'styled-components';

import { ViewWrapper } from '../index';
import GalleryImage from './GalleryImage.jsx';

import { Consumer } from '../../context/Context.jsx';
import { Variables, ObjectUtil } from '../../utils';

class Gallery extends React.Component{
  constructor(props){
    super(props);
    const { state, actions } = this.props;

    this.state = state.gallery ? {
      ...state.gallery,
      render: false
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
      render: false
    });

    await actions.GlobalActions.page.hide(this.props, 'gallery');
  }

  generateFirstImage() {
    const {albumName} = this.state;

    const firstImage = this.state[albumName] && this.state[albumName].images[0];
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
    const {albumName} = this.state;
    return this.state[albumName] && this.state[albumName].images.map((image, index) => {
      return (
        <GalleryImage
          key={`${this.props.state.gallery.key}-${index}`}
          directory={image.url}
          fileName={image.photoName} />
      )
    });
  }

  render(){
    return (
      <ViewWrapper page="gallery"
        render={this.state.render}>
        <Helmet title="Gallery - Chicago Wedding & Portrait Photographer" />
        <GalleryWrapper>
          { this.generateFirstImage() }
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