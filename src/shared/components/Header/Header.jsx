import React from 'react';
import { Link } from 'react-router-dom';
// import IMPDEV from '../UTILS/common.js';

export default class Header extends React.Component {
  render(){
    return(
      <header>
        <div className="left">
          <h1><Link to={'/'}>Tyler Scott<span className="trick"> | Chicago Wedding & Portrait Photographer</span></Link></h1>
        </div>
        {(/true/.test(this.props.hideMenu)) ? ('') : (
          <div className="right">
            <ul>
              <li><Link to={'/about/'} title="About">About</Link></li>
              <li><Link to={'//www.facebook.com/tylerscottwilliamsphotography/'} target="_blank" className="facebook" title="Facebook">F<span className="trick">acebook</span></Link></li>
              <li>
                <Link to={'/archive/'} title="Archive">
                  <div className="gridWrapper">
                    <div className="row"><span className="cell" /><span className="cell" /><span className="cell" /></div>
                    <div className="row"><span className="cell" /><span className="cell" /><span className="cell" /></div>
                    <div className="row"><span className="cell" /><span className="cell" /><span className="cell" /></div>
                    <span className="trick">Archive</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    )
  }
}
//
