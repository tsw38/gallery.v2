import React from 'react';
import {
  Header,
  Footer
} from '../components';

export default class ViewWrapper extends React.Component {
  render(){
    return(
      <React.Fragment>
        <Header hideMenu={this.props.hideMenu} />
        <div className={`page ${this.props.page}`}>
          {this.props.children}
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}
