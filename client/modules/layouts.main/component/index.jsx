import React from 'react';
import Navigation from '../../navigation/container/navigation.js';

// const Layout = ({content = () => null }) => {
// };

const Layout = ({content = () => null }) => {

  return (
    <div
      className='ep-container'>
      <div className='ep-header'>
        <header className='ep-header__wrapper'>
          <div className='ep-header__title'>
            <h3>cms PoC</h3>
          </div>
          <Navigation/>
        </header>
      </div>
      <div className="ep-feature__wrapper">
        <main>{content()}</main>
      </div>
    </div>
  )
}

export default Layout;
