import React from 'react';
// import ElementChooser from '../../element-chooser/container/element-chooser.js'

class Page extends React.Component {
  renderElement(comp, data) {
    console.log('COMP ', comp);
    console.log('DATA ', data);
  }
  render() {
    const {page} = this.props
    console.log('props ', this.props);
    return (
      <div>
        <h1>This is a page titled {page.title}.</h1>
        {page.elements.map((el, index) => (
          <div key={index}>
            {this.renderElement(el.component, el.data)}
          </div>
        ))}
      </div>
    )
  }
}

export default Page;
