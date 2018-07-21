import React from 'react';
import { Link } from 'react-router-dom';

import {
  SidebarStyles
} from './styles';

import { Variables, ObjectUtil } from '../../../utils';


const {
  AdminWrapper,
  Menu,
  StyledLink
} = SidebarStyles;

export default class UserSidebar extends React.Component{
  constructor(props){
    super(props);
  }

  async componentWillMount(){
  }

  async componentWillReceiveProps(nextProps){

  }

  async componentDidMount() {
  }



  async componentWillUnmount() {
  }

  render(){
    return (
  	  <AdminWrapper>
        <Menu>
          <StyledLink to={'/dashboard'} title="Overview">Overview</StyledLink>
          <StyledLink to={'/dashboard/proofs'} title="Digital Proofs">Proofs</StyledLink>
        </Menu>
  	  </AdminWrapper>
    )
  }
}
