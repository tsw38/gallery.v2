import React from 'react';

import styled, { css } from 'styled-components';
import { Variables } from '../../../../../utils';
import { Consumer } from '../../../../../context/Context.jsx';
import { LazyLoad } from '../../../../../components';

class BackgroundThumbnail extends React.Component{
  state = {
    isAcceptable: this.props.background
  };

  updateBackgroundState = async () => {
    const {
      actions,
      photoID,
      background
    } = this.props;

    const {
      backgrounds
    } = actions.DashboardActions;

    const response = await backgrounds.updateBackground(photoID, +!background);
    if(response.status === 200){
      this.setState({
        isAcceptable: !this.state.isAcceptable
      })
    }
  }

  render(){
    const {
      albumName,
      albumUrl,
      background,
      photoID,
      photoName,
      timestamp
    } = this.props;

    const imageUrl = `${Variables.origin}/api/images/${albumUrl}/${photoName}`;

    return (
      <ClickableThumbnail
        onClick={this.updateBackgroundState}>
        <LazyLoadWrapper>
          <LazyLoad
            data-src={imageUrl}
            scrollListener={'.main--dashboard'} />
          <BackgroundFiller
            isAcceptable={this.state.isAcceptable}/>
        </LazyLoadWrapper>
      </ClickableThumbnail>
    )
  }
}

export default props => (
  <Consumer>
    {context => {
      return <BackgroundThumbnail {...props} {...context} />
    }}
  </Consumer>
)

const ClickableThumbnail = styled.div`
  width: calc(100%/3);
  padding-top: calc(100%/3);
  overflow:hidden;
  display:inline-block;
  vertical-align:middle;
  position:relative;
  cursor:pointer;
  transition: opacity 0.4s ease;
  opacity: 1;
  
  &:hover{
    opacity: 0.8;
  }
`;

const LazyLoadWrapper = styled.div`
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
`;

const BackgroundFiller = styled.div.attrs({
  style: ({ isAcceptable }) => ({
    'backgroundColor': (isAcceptable) ? '#00b894' : '#d63031'
  })
})`
  position:absolute;
  right:0;
  bottom:0;
  opacity:1;
  height:15px;
  width:15px;
  transition: opacity 0.4s ease;
  cursor:pointer;

  &:hover{
    opacity: 0.8;
  }
`;
