/* eslint no-unused-vars: 0 max-len: 0 */
import React from 'react';
import ReactDOM from 'react'
import EditZone from '../../edit-zone/container/editZone'
import ContactInfo from '../../page-elements/contact-info/container/contact-info'
import PageTitle from '../../page-elements/page-title/container/page-title'
import TextBlock from '../../page-elements/text-block/container/text-block'

const elementMappings = {
  ContactInfo,
  PageTitle,
  TextBlock
}

class Page extends React.Component {

  componentWillMount() {
    const {Session, page} = this.props
    Session.set('currentPage', {
      title: page.title,
      elements: []
    });
  }

  componentDidUpdate() {
    const {Session, page} = this.props
    const sessionPage = Session.get('currentPage')
    sessionPage.title = page.title
    Session.set('currentPage', sessionPage)
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
    const {savePage, page} = this.props
    const {FlowRouter} = this.props.context()
    savePage()
    FlowRouter.go('/page/' + page.title)
  }

  editPage() {
    const {page} = this.props
    const {FlowRouter} = this.props.context()
    FlowRouter.go('/page/' + page.title + '/edit')
  }

  reset() {
    const {reset} = this.props
    reset()
  }

  renderContent() {
    const {page} = this.props

    if (page.elements.length) {
      return this.renderElements()
    } else {
      return this.renderEditZone(page.title)
    }

  }

  renderEditZone(title) {
    return <EditZone index={0} pageTitle={title} order='before'/>
  }

  renderElements() {
    const {page, edit, Session} = this.props

    return this.props.page.elements.map((el, index) => {
      if (!el) {return}
      el.data.positionOnPage = index
      el.data.edit = edit
      return (
        <div key={index}>
          {ReactDOM.createElement(elementMappings[el.component], {data: el.data})}
          {edit ? <EditZone index={index} pageTitle={page.title} order='after'/> : <span></span>}
        </div>
      )
    })
  }

  render() {
    const {page, edit} = this.props

    const style = {
      reset: {
        border: 'none',
        background: 'red',
        padding: '10px',
        position: 'absolute',
        bottom: '10px',
        right: '10px'
      }
    }

    return (
      <div>
        {this.renderContent()}
        {edit ? <button onClick={this.savePage.bind(this)}>SAVE</button> : '' }
        <button onClick={this.addPage.bind(this)}>Add Page</button>
        <input type="text" ref="newPageTitle" placeholder="Title for new page"></input>
        <button onClick={this.deletePage.bind(this)}>Delete Page</button>
        {!edit ? <button onClick={this.editPage.bind(this)}>Edit Page</button> : ''}
        <button onClick={this.reset.bind(this)} style={style.reset}>RESET</button>
      </div>
    )
  }
}

export default Page;
