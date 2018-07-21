import React from 'react';

import { Helmet } from 'react-helmet';
import styled, { css } from 'styled-components';

import { MainSidebar } from '../Sidebar/index';

import { ViewWrapper } from '../../index';
import { Consumer } from '../../../context/Context.jsx';
import { Variables, ObjectUtil } from '../../../utils';
import Cookie from 'js-cookie';

class MainDashboardWrapper extends React.Component{
  state = {
    shouldRender: false
  }

  async componentWillMount(){
    const signedIn = ObjectUtil.deepFind(this.props.state, 'cookies.galleryUser');
    if(!signedIn){
      global.location = '/';
    }
  }

  async componentWillReceiveProps(nextProps){
  }

  async componentDidMount() {
    const signedIn = ObjectUtil.deepFind(this.props.state, 'cookies.galleryUser');
    if(signedIn){
      this.setState({
        shouldRender: true
      });
    }
  }



  async componentWillUnmount() {
  }

  render(){
    return (
      <ViewWrapper page="dashboard"
          render={this.state.shouldRender}>
        <Helmet title="Dashboard - Chicago Wedding & Portrait Photographer" />
        {this.state.shouldRender &&
          <DashboardWrapperOuter>
            <DashboardWrapper>
              <MainSidebar />
              <MainContent>
                {this.props.children}
              </MainContent>
            </DashboardWrapper>
          </DashboardWrapperOuter>
        }
      </ViewWrapper>
    )
  }
}

export default props => (
  <Consumer>
    {context => {
      return <MainDashboardWrapper {...props} {...context} />
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
