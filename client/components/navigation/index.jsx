import React from 'react';

const Navigation = ({pages}) => {
  return (
    <nav>
      {pages.map(current => (
        <a href={`${current.title}`}>{current.title} </a>
        )
      )}
    </nav>
  )
}

export default Navigation;
