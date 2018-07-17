import React from 'react';
import styled, { css } from 'styled-components';

import { Consumer } from '../../../context/Context.jsx';
import { Variables, ObjectUtil } from '../../../utils';

import AdminSidebar from './Admin.jsx';

class MainSidebar extends React.Component{
  constructor(props){
    super(props);
    const { state, actions } = this.props;

    this.state = state.dashboard ? {
      ...state.dashboard,
    } : actions.DashboardActions.stateManager.initState()
  }

  async componentWillMount(){
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
        <AdminSidebar />
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
