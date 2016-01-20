import React from 'react';

const Layout = ({content = () => null }) => (
  <div>
    <h1>CMS</h1>

    <main>{content()}</main>

  </div>
);

export default Layout;
