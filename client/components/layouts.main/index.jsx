import React from 'react';

const Layout = ({content = () => null }) => {
  console.log(content.toString());
  return (
    <div>
      <h1>CMS</h1>

      <main>{content()}</main>

    </div>
  )
};

export default Layout;
