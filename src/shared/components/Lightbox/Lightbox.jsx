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
      await this.handleKeypress();
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

	async componentDidMount(){

	}

	componentWillUnmount() {
    this.unhandleKeypress();
	}

  async handleKeypress(){
    if(!global.window) return;
    document.addEventListener('keyup', this.navigateNextImage);
  }

  async unhandleKeypress(){
    if(!global.window) return;
    document.removeEventListener('keyup', this.navigateNextImage);
  }

  navigateNextImage = (e) => {
    let {
      imageList,
      activeIndex
    } = this.state;

    const numOfImages = imageList.length;

    switch(e.keyCode){
      case 37:
        activeIndex = (activeIndex === 0) ? numOfImages-1 : --this.state.activeIndex;
        break;
      case 39:
        activeIndex = (activeIndex+1 === numOfImages) ? 0 : ++this.state.activeIndex;
        break;
      case 27:
        this.handleCanvasClose({target: this.canvasWrapperRef.current});
        break;
      default:
        break;
    }

    this.setState({
      ...this.state,
      activeIndex
    })
  }

  handleArrowClick = (keyCode) => () => this.navigateNextImage({keyCode});

  handleCanvasClose = async(e) => {
    if(e.target.className === this.canvasWrapperRef.current.className){
      this.setState({
        activeLightbox: false
      }, () => {
        setTimeout(()=> {
          this.unhandleKeypress();

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
              <ArrowWrapperLeft
                onClick={this.handleArrowClick(37)}>
                <ArrowWrapperInner>
                  <Arrow/>
                </ArrowWrapperInner>
              </ArrowWrapperLeft>
              <FittedImage src={activeImageUrl}s/>
              <ArrowWrapperRight
                onClick={this.handleArrowClick(39)}>
                <ArrowWrapperInner>
                  <Arrow/>
                </ArrowWrapperInner>
              </ArrowWrapperRight>
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
  position:relative;
  max-height: 80%;
  max-width: 75%;
  min-height: 1px;
  min-width:1px;
  z-index: 2010;
  transition:max-height 1000ms ease 500ms, max-width 1000ms ease 500ms, background-image 500ms ease;
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
const ArrowWrapper = styled.div`
  position: absolute;
  height:100%;
  width: 15%;
  bottom: 0;
`;

const ArrowWrapperLeft = ArrowWrapper.extend`
  left:0;
  transform-origin: 50% 50%;
  transform: rotate(180deg);
`;
const ArrowWrapperRight = ArrowWrapper.extend`
  right:0;
`;

const ArrowWrapperInner = styled.div`
  height:100%;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;
`;

const Arrow = styled.div`
  max-height: 300px;
  height:8vw;
  width: 100%;
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACg0lEQVR42u3dwWrUYBTF8ZAR6fOVUrCLLrrowoULVy7cSREREREREREpRURFSunT5Z4bNw2MYLmjyXfPnen5PUDJd/90kpnJfOk6IgD7Znbp7nvM47iTABy6+zCO4wjg2t3vs4/pzgBwNA1/YmZXipAAwLG7Y/wLRWjMzE5uG/5ahEtFaADAaTT8CQBFWJKZPdx0+IqwMACP3P1fZr8e4ZcizGBmj/93+IowE4Anc4e/FuGnu99jr2lrmNnTpYY/MTNF2ASAZ4tO/s8I33ctQr8lf7Pruq5brVYHAL7uWoTFAThr9V9wc074pggBRShAEQpIiKBzQiQhwoUiBFpHMLMLd292BbYTEiKcK0JAEQpIiPBFEQIJJ2ZFiChCAQkRPitCICHCJ0UIJJyYFSGSEOGjIgQSInxQhEDrCMMwKEIk4cT8XhECilCAIhSQEOEde43lJVwdvWWvsTxFKCAhwhv2GstLeJ/wmr3G8hL+ExQhknB1pAiRhAiv2GssTxEKSDgnvGSvsbyECC/YayxPEQpIiPCcvcbyEt6snbHXWF7C1dHsCPocXNrQSxCRTsJEugwl0vCJ9FEEkT6MI9LwifSFDJG+kiTSl/JEui2FSDdmEWn4RLo5l0i3pxNp+EQaPpF+pEekn6kS6YfaRNqqgEibdRBpuxoibdhEpOETadM+Im1bSaThE2nrYiJt3k2k7euJ9AAHIg2fSMMnSrja2alnibW4bPNWBwvgR9/3D/q+t4Yz2X56lGEBephnAXqcbQEzH+isp2ovQY80LwDA6aYR3F3Db8HMTqIIZqbhtwTg+LYIZnal4ScAcOTug4ZPBOBwigDgWsMnALB/85q/xz4Wlt9+Ci7zZE+0dQAAAABJRU5ErkJggg==');
  background-repeat: no-repeat;
  background-size: contain;
  background-position:center;
  opacity: 0;
  transition: opacity 400ms ease;
  ${ArrowWrapperInner}:hover & {
    opacity: 1;
  }
`;


const FittedImage = styled.img`
  max-width:100%;
  max-height: -webkit-fill-available;
  opacity:0;
  user-select:none;
  pointer-events:none;
`;
