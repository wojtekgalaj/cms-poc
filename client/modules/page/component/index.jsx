/* eslint no-unused-vars: 0 max-len: 0 */
import React from 'react';
import ReactDOM from 'react'
import EditZone from '../../edit-zone/container/editZone'
import ContactInfo from '../../page-elements/contact-info/container/contact-info'
import PageTitle from '../../page-elements/page-title/container/page-title'
import TextBlock from '../../page-elements/text-block/container/text-block'

class Page extends React.Component {


  componentWillMount() {
    const {Session, page} = this.props
    console.log('setting currentPage in page component');
    Session.set('currentPage', {
      title: page.title,
      elements: []
    });
  }

  addPage(title) {
    const {addPage} = this.props
    const newTitle = this.refs.newPageTitle.value
    if (newTitle) {
      addPage(newTitle)
    }
  }

  deletePage() {
    const {deletePage} = this.props
    deletePage()
  }

  savePage() {
    const {savePage} = this.props
    savePage()
  }


  renderElements() {
    const {page, edit, Session} = this.props
    // I need to find a way to do this without the
    // switch.
    console.log('Page elements ', this.props.page.elements);

    return this.props.page.elements.map((el, index) => {
      el.data.positionOnPage = index
      el.data.edit = edit
      switch (el.component) {
        case 'ContactInfo':
          return (
            <div key={index}>
              {edit ? <EditZone index={index} pageTitle={page.title} order='before'/> : <span></span>}
              <ContactInfo data={el.data}/>
              {edit ? <EditZone index={index} pageTitle={page.title} order='after'/> : <span></span>}
            </div>
          )
        case 'PageTitle':
          return (
            <div key={index}>
              {edit ? <EditZone index={index} pageTitle={page.title} order='before'/> : <span></span>}
              <PageTitle data={el.data}/>
              {edit ? <EditZone index={index} pageTitle={page.title} order='after'/> : <span></span>}
            </div>
          )
        case 'TextBlock':
          return (
            <div key={index}>
              {edit ? <EditZone index={index} pageTitle={page.title} order='before'/> : <span></span>}
              <TextBlock data={el.data}/>
              {edit ? <EditZone index={index} pageTitle={page.title} order='after'/> : <span></span>}
            </div>
          )

        default:

      }
      // This renders to the dom an unrendered component
      // return ReactDOM.createElement(el.component, el.data);
    })
  }

  render() {
    const {page, edit} = this.props
    return (
      <div>
        {this.renderElements()}
        {edit ? <button onClick={this.savePage.bind(this)}>SAVE</button> : '' }
        <button onClick={this.addPage.bind(this)}>Add Page</button>
        <input type="text" ref="newPageTitle" defaultValue="Title for new page"></input>
        <button onClick={this.deletePage.bind(this)}>Delete Page</button>
      </div>
    )
  }
}

export default Page;
