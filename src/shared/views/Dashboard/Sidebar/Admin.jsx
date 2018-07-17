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

export default class AdminSidebar extends React.Component{
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
          <StyledLink to={'/dashboard/backgrounds'} title="Backgrounds">Backgrounds</StyledLink>
          <StyledLink to={'/dashboard/galleries'} title="Galleries">Galleries</StyledLink>
          <StyledLink to={'/dashboard/proofs'} title="Digital Proofs">Digital Proofs</StyledLink>
        </Menu>
  	  </AdminWrapper>
    )
  }
}
