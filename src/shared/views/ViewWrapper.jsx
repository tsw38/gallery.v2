import React from 'react';
import {
  Header,
  Footer
} from '../components';

import styled from 'styled-components';

export default class ViewWrapper extends React.Component {
  render(){
    return(
      <React.Fragment>
        <Header hideMenu={this.props.hideMenu} />
        <Page>
          <PageContainer>
            {this.props.children}
          </PageContainer>
        </Page>
        <Footer />
      </React.Fragment>
    )
  }
}

const Page = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  user-select: ${props => (/homepage/.test(props.page)) ? 'none' : 'initial' }
`;

const PageContainer = styled.div`
  height: inherit;
  width: inherit;
  position:relative;
`;
