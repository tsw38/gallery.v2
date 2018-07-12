import React from 'react';

import { Helmet } from 'react-helmet';
import styled, { css } from 'styled-components';

import { ViewWrapper } from '../index';
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

    console.log(this.state, 5);
    console.log('-');
    console.log(parentState, 5);
    console.log('COMPONENTWILLRECEIVEPROPS', 5);
  }

  async componentDidMount() {
    const {
      actions,
      stateUpdater,
      getParentState
    } = this.props;

    const parentState = await getParentState('gallery');
    const albumName   = (parentState) ? parentState.albumName : this.state.albumName;
    console.log(`ALBUM NAME FROM PROVIDER ${albumName}`, 8);
    console.log(ObjectUtil.deepFind(parentState, `${albumName}`), 8);



    if (!ObjectUtil.deepFind(parentState, `${albumName}`)) {
      const images = await actions.ArchiveActions.gallery.getGallery(albumName);
      console.log(images, 1);
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
    console.log('MOUNT STATE', this.state);


    console.log("COMPONENTDIDMOUNT", 1);
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

    console.log("COMPONENTDISMOUNTING", 3);
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
          backgroundImage={`${Variables.origin}/api/images/${image.url}/${image.photoName}`}
          key={`${this.props.state.gallery.key}-${index}`}>
          <img src={`${Variables.origin}/api/images/${image.url}/${image.photoName}`} alt="" />
        </GalleryImage>
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