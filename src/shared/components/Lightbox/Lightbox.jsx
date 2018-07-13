import React from 'react';

import styled, { css } from 'styled-components';

import {
  Viewport,
  debounce,
  Variables,
  ObjectUtil
} from '../../utils';

import { Consumer } from '../../context/Context.jsx';

class Lightbox extends React.Component{
	constructor(props) {
		super(props);
    this.state = {
      activeLightbox: false,
      imageList: [],
      albumName: '',
      activeIndex: -1
    };
    this.canvasWrapperRef = React.createRef();
	}

  async componentWillReceiveProps(nextProps) {
    const parentState = await this.props.getParentState('gallery');
    const activeAlbum = ObjectUtil.deepFind(parentState, 'albumName');

    if (ObjectUtil.deepFind(parentState, 'render') && ObjectUtil.deepFind(parentState, 'activeLightbox')) {
      if(this.state.albumName !== parentState.albumName){
        // console.warn('update albumName!!!!!!');
        this.setState({
          albumName: parentState.albumName,
          imageList: parentState[parentState.albumName].images,
          activeLightbox: true
        }, () => {
          setTimeout(() => {
            this.setState({
              ...this.state,
              activeIndex: parentState.activeIndex
            })
          },300);
        })
      } else {
        this.setState({
          activeLightbox: true
        }, () => {
          setTimeout(() => {
            this.setState({
              ...this.state,
              activeIndex: parentState.activeIndex
            })
          },300);
        })
      }
    }
  }

	componentDidMount(){

    // const onGalleryPage = !!ObjectUtil.deepFind(this.props.state, 'gallery.render');

    // console.log(this.props.state, 2);
	}

	componentWillUnmount() {
	}

  handleCanvasClose = async(e) => {
    if(e.target.className === this.canvasWrapperRef.current.className){
      this.setState({
        activeLightbox: false
      }, () => {
        setTimeout(()=> {
          this.setState({
            activeIndex: -1
          }, async () => {
            await this.props.stateUpdater('gallery', {
              activeLightbox: false,
              activeIndex: -1
            })
          })
        }, 100)
      })
    }
  }

	render(){
    const activeImage = this.state.activeIndex >= 0 ? this.state.imageList[this.state.activeIndex] : undefined;
    const activeImageUrl = activeImage && `${Variables.origin}/api/images/${activeImage.url}/${activeImage.photoName}`;
    // console.warn();
		return(
			<LightboxBackground
        activeLightbox={this.state.activeLightbox}>
          <CanvasWrapper
            onClick={this.handleCanvasClose}
            innerRef={this.canvasWrapperRef}>
            <Canvas
              activeLightbox={this.state.activeLightbox}
              image={activeImageUrl}>
              <FittedImage
                src={activeImageUrl}
              />
            </Canvas>
          </CanvasWrapper>
      </LightboxBackground>
		)
	}
}

export default props => (
  <Consumer>
    {context => {
      return <Lightbox {...props} {...context} />
    }}
  </Consumer>
)

const LightboxBackground = styled.div`
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  display: block;
  transition: background-color 350ms ease 100ms;

  ${props => (!props.activeLightbox) && css`
    user-select:none;
    pointer-events:none;
    background-color: rgba(0,0,0,0);
  `}
  ${props => (props.activeLightbox) && css`
    z-index:2000;
    user-select:initial;
    pointer-events:initial;
    background-color: rgba(0,0,0,0.75);
  `}
`

const CanvasWrapper = styled.div`
  position:relative;
  height:100%;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`

const Canvas = styled.div`
  max-height: 80%;
  max-width: 75%;
  min-height: 1px;
  min-width:1px;
  z-index: 2010;
  transition:all 1s ease 500ms;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=);
  background-repeat:no-repeat;
  background-position:center;
  background-size:contain;
  ${props => (!props.activeLightbox) && css`
    user-select:none;
    pointer-events:none;
  `}
  ${props => (props.activeLightbox) && css`
    background-image:url("${props.image}");
  `}
`;

const FittedImage = styled.img`
  max-width:100%;
  max-height: -webkit-fill-available;
  opacity:0;
  user-select:none;
  pointer-events:none;
`;
