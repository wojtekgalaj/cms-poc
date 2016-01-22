import React from 'react';

const Page = ({page}) => {
  return (
    <div>
      <h1>This is a page titled {page.title}.</h1>
      {page.elements.map(el => (
        <p>{el.component}</p>
      ))}
      <div className="editZone"></div>
    </div>
  )
};

export default Page;
