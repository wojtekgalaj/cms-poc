import React from 'react';

const Layout = ({content = () => null }) => {
  var containerStyle = {
    width: '600px',
    margin: 'auto',
    fontFamily: 'sans-serif'
  }
  return (
    <div style={containerStyle}>
      <h1>CMS</h1>

      <main>{content()}</main>

    </div>
  )
};

export default Layout;
