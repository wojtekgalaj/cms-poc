import React from 'react';
import Navigation from '../../navigation/container/navigation.js';

// const Layout = ({content = () => null }) => {
// };

const Layout = ({content = () => null }) => {
  var containerStyle = {
    width: '600px',
    margin: 'auto',
    fontFamily: 'sans-serif'
  }

  return (
    <div
      style={containerStyle}>
      <h1>CMS</h1>
      <Navigation/>
      <main>{content()}</main>
    </div>
  )
}

export default Layout;
