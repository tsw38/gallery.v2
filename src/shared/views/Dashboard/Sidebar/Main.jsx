import React from 'react';
import styled, { css } from 'styled-components';

import { Consumer } from '../../../context/Context.jsx';
import { Variables, ObjectUtil } from '../../../utils';

import AdminSidebar from './Admin.jsx';
import UserSidebar from './User.jsx';

class MainSidebar extends React.Component{
  state = {
    shouldRender: false
  }

  async componentWillMount(){
    const signedIn = ObjectUtil.deepFind(this.props.state, 'cookies.galleryUser');
    const userData = JSON.parse(atob(signedIn));
    this.setState({
      'accessLevel': btoa(userData.accessLevel)
    })
  }

  async componentWillReceiveProps(nextProps){
    const parentState = await nextProps.getParentState('dashboard');
    const stateChanged = ObjectUtil.compare(this.state, parentState).changed;
    // console.log(this.state, 1);
    if (stateChanged) {
      this.setState({
        ...this.state,
        ...parentState
      });
    }
  }

  async componentDidMount() {
  }



  async componentWillUnmount() {
  }

  renderSidebar(){
    return <AdminSidebar />
  }
  
  render(){
    return (
  	  <SidebarWrapper>
        {(this.state['accessLevel'] === btoa('1')) ? (
          <AdminSidebar />
        ) : (
          <UserSidebar />
        )}
  	  </SidebarWrapper>
    )
  }
}

export default props => (
  <Consumer>
    {context => {
      return <MainSidebar {...props} {...context} />
    }}
  </Consumer>
)

const SidebarWrapper = styled.div`
  grid-area: sidebar;
  background-color:${Variables.backgroundState};
`;
