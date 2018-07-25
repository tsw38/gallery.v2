import React from 'react';

import styled, { css } from 'styled-components';

import { Consumer } from '../../../../context/Context.jsx';
import { Variables, ObjectUtil } from '../../../../utils';
import {RadioSet} from '../../../../components';

import Thumbnail from './components/Thumbnails.jsx';

class AdminBackgrounds extends React.Component{
  state={
    images: [],
    displayAlbumInput: false,
    filter: {
      topic: '',
      albumName:'',
      order: ''
    }
  };
  filterTopicRef = React.createRef();
  radioSetRef    = React.createRef();

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
      const images = await this.props.actions.GlobalActions.imagesHelper.getAllImages();

      this.setState({
        images
      });      
    }
  }

  generateFilterList() {
    const {
      images
    } = this.state;
    
    return (images.length) ? (
      <label>
        <span>Filter By:</span>
        <select
          onChange={this.shouldAlbumInputDisplay}
          ref={this.filterTopicRef}>
            <option value="none" defaultValue>none</option>
          {Object.keys(images[1]).filter(key => key !== 'photoName' && key !== 'albumUrl').map(filter =>
            <option 
              key={filter}
              value={filter}>{filter}</option>
          )}
        </select>
      </label>
    ) : null;
  }

  shouldAlbumInputDisplay = (e) => {
    if(/albumName/.test(e.target.value)){
      this.setState({
        displayAlbumInput: true
      })
    }
  }

  getFilteredImages = () => {
    const {
      topic,
      order,
      albumName
    } = this.state.filter;

    switch(topic){
      case 'photoID':
        return this.state.images.sort((a, b) => {
          return (/ASC/.test(order)) ? 
            a.photoID - b.photoID:
            b.photoID - a.photoID;
        });
      case 'albumName':
        if(/ASC/.test(order)){
          return (albumName) ?
            this.state.images.filter(image => image.albumName.toLowerCase().indexOf(albumName.toLowerCase()) >= 0):
            
            this.state.images.sort(((a, b) => {
              if (a.albumName < b.albumName) return -1;
              if (a.albumName > b.albumName) return 1;
              return 0;
            }));
        } else {
          return (albumName) ?
            this.state.images.filter(image => image.albumName.toLowerCase().indexOf(albumName.toLowerCase()) >= 0):

            this.state.images.sort(((a, b) => {
              if (b.albumName < a.albumName) return 1;
              if (b.albumName > a.albumName) return -1;
              return 0;
            }));
        }
      case 'background':
        return this.state.images.filter(image => image.background === true);
      default:
        console.log(this.state.filter);
        return this.state.images;
    }
  }

  renderImages = () => {
    const images = this.getFilteredImages();

    return (images.length) ? images.map(imageProps =>
      <Thumbnail
        key={`${imageProps.photoID}`}
        {...imageProps}/>
    ) : null;
  }

  onClearClick = () => {
    this.setState({
      ...this.state,
      displayAlbumInput: false,
      filter: {
        topic: '',
        albumName: '',
        order: ''
      }
    });
  }

  onSubmitClick = () => {
    const topic = (/none/.test(this.filterTopicRef.current.value)) ? '' : this.filterTopicRef.current.value;

    this.setState({
      ...this.state,
      filter: {
        topic,
        order: this.radioSetRef.current.value
      }
    })
  }

  storeAlbumName = (e) => {
    this.setState({
      filter:{
        ...this.state.filter,
        albumName: e.target.value
      }
    });
  }

  render(){
    return (
      <React.Fragment>
        <FilterWrapper>
          <SectionWrapper>
            {this.generateFilterList()}
          </SectionWrapper>

          {this.state.displayAlbumInput &&
            <SectionWrapper>
              <label>
                <span>Album Name: </span>
                <input
                  type="text"
                  onChange={this.storeAlbumName}/>
              </label>
            </SectionWrapper>
          }
          
          <SectionWrapper className="order">
            <span>Order:</span>
            <RadioSet
              setName="order"
              handleRef={this.radioSetRef}
              setOptions={['ASC', 'DESC']} />
          </SectionWrapper>

          <SectionWrapper>
            <button
              onClick={this.onClearClick}>
              Clear
            </button>
            <button
              onClick={this.onSubmitClick}>
              Submit
            </button>
          </SectionWrapper>
        </FilterWrapper>

        <RelativeWrapper>
          <BackgroundImageWrapper
            className="main--dashboard">
            {this.renderImages()}
          </BackgroundImageWrapper>
        </RelativeWrapper>
      </React.Fragment>
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

const FilterWrapper = styled.div`
  display:flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height:45px;
  background-color: #f0f3f5;
  font-size:14px;
  text-transform:uppercase;

  select {
    margin: 0 0 0 10px;
  }

  span{
    font-size: 16px;
  }

  .order{
    display:inherit;
    vertical-align:middle;

    label{
      margin: 0 0 0 10px;
      vertical-align:middle;

      input{
        margin:0 0 0 10px;
      }
    }
  }

  button{
    background-color:white;
    border-radius: 0;
    border:1px solid ${Variables.textBlack};
    text-transform:uppercase;
    padding: 5px 15px;
    cursor:pointer;

    &:first-of-type{
      margin-right:10px;
    }

    &:hover{
      color:white;
      background-color:${Variables.textBlack};
    }
  }
`;

const SectionWrapper = styled.div`
  margin: 0 10px;
`;

const RelativeWrapper = styled.div`
  position:relative;
  height:100%;
  width:100%;
`;


const BackgroundImageWrapper = styled.div`
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  overflow-y:scroll;
  grid-gap: 8px;
  grid-template-columns: auto auto auto auto;
  display: grid;
`;