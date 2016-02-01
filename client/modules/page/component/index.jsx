/* eslint no-unused-vars: 0 */
import React from 'react';
import ReactDOM from 'react'
import ContactInfo from '../../contact-info/component/index.jsx'
import PageTitle from '../../page-title/component/index.jsx'
import TextBlock from '../../text-block/component/index.jsx'

class Page extends React.Component {
  renderElements() {
    const page = this.props
    // I need to find a way to do this without the
    // switch.
    return this.props.page.elements.map((el, index) => {
      switch (el.component) {
        case 'ContactInfo':
          return <ContactInfo data={el.data} key={index}/>
        case 'PageTitle':
          return <PageTitle data={el.data} key={index}/>
        case 'TextBlock':
          return <TextBlock data={el.data} key={index}/>

        default:

      }
      // This renders to the dom an unrendered component
      // return ReactDOM.createElement(el.component, el.data);
    })
  }

  render() {
    const {page} = this.props
    return (
      <div>
        {this.renderElements()}
      </div>
    )
  }
}

export default Page;
