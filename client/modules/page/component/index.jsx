import React from 'react';
import EditZone from '../../edit-zone/container/editZone.js'



class Page extends React.Component {
  render() {
    const {page} = this.props
    debugger
    return (
      <div>
        <h1>This is a page titled {page.title}.</h1>
        {page.elements.map(el => (
          <div>
            <p key={el.component}>{el.component}</p>
            <EditZone/>
          </div>
        ))}
      </div>
    )
  }
}

export default Page;
