import React from 'react';

import { Helmet } from 'react-helmet';
import styled, { css } from 'styled-components';

import { MainSidebar } from '../Sidebar/index';

import { ViewWrapper } from '../../index';
import { Consumer } from '../../../context/Context.jsx';
import { Variables, ObjectUtil } from '../../../utils';


class MainDashboard extends React.Component{
  constructor(props){
    super(props);
    const { state, actions } = this.props;

    // console.log(this.props);
    this.state = state.dashboard ? {
      ...state.dashboard,
    } : actions.DashboardActions.stateManager.initState()
  }

  async componentWillMount(){
    if(global.window && localStorage){
      if(!localStorage.getItem(process.env.LOCALSTORAGE_KEY)){
        global.location = '/';
      } else {
        let expiration = ObjectUtil.deepFind(JSON.parse(localStorage.getItem(process.env.LOCALSTORAGE_KEY) || {}), 'expiration');
        expiration = expiration ? new Date(expiration).getTime() : false;
        let now = (new Date()).getTime();
        if(expiration <= now){
          localStorage.clear(process.env.LOCALSTORAGE_KEY);
          await this.props.stateUpdater('dashboard', {
            ...this.props.getParentState('dashboard'),
            success: false,
            expiration: -1,
            render: false,
            accessLevel: -1
          })
          window.location = '/';
        } else {
          const parentState = await this.props.getParentState('dashboard');
          const {
            expiration,
            accessLevel,
            ...rest
          } = JSON.parse(localStorage.getItem(process.env.LOCALSTORAGE_KEY));

          this.setState({
            ...this.state,
            ...parentState,
            expiration,
            render: true,
            accessLevel
          }, () => {
            console.log(this.state, 8);
          })
        }
      }
    } else {
      global.location = '/';
    }
  }

  async componentWillReceiveProps(nextProps){
    // const parentState = await nextProps.getParentState('archive');
    // const stateChanged = ObjectUtil.compare(this.state, parentState).changed;
    // if (stateChanged) {
    //   this.setState({
    //     ...this.state,
    //     ...parentState
    //   });
    // }
  }

  async componentDidMount() {
    // const {
    //   actions,
    //   stateUpdater
    // } = this.props;
    // const {ArchiveActions, GlobalActions} = actions;
    //
    // if(this.state.gallery.length === 0){
    //   const gallery = await ArchiveActions.gallery.getThumbnails();
    //
    //   this.setState({
    //     ...this.state,
    //     gallery
    //   })
    //
    //   await stateUpdater('archive', {
    //     ...this.state,
    //     gallery
    //   });
    // }
    //
    // await GlobalActions.page.render(this.props, 'archive');
  }



  async componentWillUnmount() {
    // await this.props.actions.GlobalActions.page.hide(this.props, 'archive');
  }

  async onThumbnailClick(albumName) {
    // await this.props.stateUpdater('gallery', {
    //   albumName,
    //   render: false
    // });
  }

  generateThumbnails() {
    // const { gallery } = this.state;
    // return (gallery.length) ? gallery.slice(0, gallery.length - (gallery.length%3)).map((item) => {
    //   return (
    //     <Thumbnail
    //       key={uuid()}
    //       onClick={() => this.onThumbnailClick(item.url)}
    //       albumName={item.albumName}
    //       photoName={item.photoName}
    //       url={item.url}>
    //     </Thumbnail>
    //   )
    // }) : null;
  }

  render(){
    return (
      <ViewWrapper page="dashboard"
          render={this.state.render}>
        <Helmet title="Dashboard - Chicago Wedding & Portrait Photographer" />
        <DashboardWrapperOuter>
          <DashboardWrapper>
            <MainSidebar />
            <MainContent />
          </DashboardWrapper>
        </DashboardWrapperOuter>
      </ViewWrapper>
    )
  }
}

export default props => (
  <Consumer>
    {context => {
      return <MainDashboard {...props} {...context} />
    }}
  </Consumer>
)

const DashboardWrapperOuter = styled.div`
  display: grid;
  width:100%;
  height:100%;
  background-color: #f0f3f5;
`

const DashboardWrapper = styled.div`
  display: grid;
  width:100%;
  height:calc(100% - 45px);
  margin-top:45px;
  grid-template-columns: 152px calc(100% - 152px);
  grid-template-rows: auto;
  grid-template-areas:
    'sidebar main';
`


const MainContent = styled.div`
  grid-area: main;
`;
