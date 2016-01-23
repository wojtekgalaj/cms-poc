import React from 'react';
import Navigation from '../../containers/navigation.js';
import EditButton from '../../containers/edit-button.js';

const Layout = ({content = () => null }) => {
  var containerStyle = {
    width: '600px',
    margin: 'auto',
    fontFamily: 'sans-serif'
  }
  return (
    <div
      style={containerStyle}
      >
      <h1>CMS</h1>
      <Navigation/>
      <EditButton/>

      <main>{content()}</main>

    </div>
  )
};

export default Layout;
