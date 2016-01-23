import React from 'react';

const Navigation = ({pages}) => {
  return (
    <nav>
      {pages.map(current => (
        <a href={`/page/${current.title}`}>{current.title} </a>
        )
      )}
    </nav>
  )
}

export default Navigation;
