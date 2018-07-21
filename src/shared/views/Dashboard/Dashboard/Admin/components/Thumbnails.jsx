import React from 'react';

import styled, { css } from 'styled-components';
import { Variables } from '../../../../../utils';
import { Consumer } from '../../../../../context/Context.jsx';
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
        isAcceptable: +!background
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
        onClick={this.updateBackgroundState}
        image={imageUrl}>
        <BackgroundFiller
          isAcceptable={this.state.isAcceptable}/>
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

const ClickableThumbnail = styled.div.attrs({
  style: ({ image }) => ({
    'backgroundImage': `url(${image})`
  })
})`
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  width: calc(100%/3);
  padding-top: calc(100%/3);
  overflow:hidden;
  display:inline-block;
  vertical-align:middle;
  position:relative;
`;

const BackgroundFiller = styled.div.attrs({
  style: ({ isAcceptable }) => ({
    'backgroundColor': (isAcceptable) ? '#55efc4' : '#ff7675'
  })
})`
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  opacity:0.4;
  transition: opacity 0.4s ease;
  cursor:pointer;

  &:hover{
    opacity: 0.8;
  }
`;
