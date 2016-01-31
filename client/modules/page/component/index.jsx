/* eslint no-unused-vars: 0 */
import React from 'react';
import ReactDOM from 'react'
import ContactInfo from '../../contact-info/component/index.jsx'
import PageTitle from '../../page-title/component/index.jsx'
import TextBlock from '../../text-block/component/index.jsx'

class Page extends React.Component {
  renderElement(comp, data, container) {
    const createdElement = React.createElement(comp, data)
    console.log('1: ', createdElement);
    console.log('2: ', container);
  }

  componentDidMount() {
    const {page} = this.props
    page.elements.map((el) => {
      this.renderElement(el.component, el.data, document.getElementById('page-elements'))
    })
    console.log('ddd', document.getElementById('page-elements'));
  }

  render() {
    const {page} = this.props
    return (
      <div>
        <h1>This is a page titled {page.title}.</h1>
        <div id="page-elements"></div>
      </div>
    )
  }
}

export default Page;
