import React from 'react'

class PageTitle extends React.Component {

  fillInTheBlanks(data) {
    data.title = data.title || 'Placeholder'
    data.subTitle = data.subTitle || 'Placeholder'
    return data
  }

  updatePageModel() {
    const {Session} = this.props
    let {data} = this.props
    const {title, subTitle} = this.refs
    const pageModel = Session.get('currentPage')
    const refCR = data.edit ? 'value' : 'textContent'

    data = this.fillInTheBlanks(data)

    pageModel.elements[data.positionOnPage] = {
      component: 'PageTitle',
      data: {
        title: title[refCR],
        subTitle: subTitle[refCR]
      }
    }
    Session.set('currentPage', pageModel)
  }

  componentDidMount() {
    this.updatePageModel()
  }

  onInputChange() {
    this.updatePageModel()
  }

  render() {
    const {data, Session} = this.props
    const presentation = (
      <div>
        <h1 ref='title'>{data.title}</h1>
        <h3 ref='subTitle'>{data.subTitle}</h3>
      </div>
    )

    const editing = (
      <div>
        <hr/>
        <h1><input
              onChange={this.onInputChange.bind(this)}
              ref='title'
              type="text" defaultValue={data.title}/></h1>
        <h3><input
              onChange={this.onInputChange.bind(this)}
              ref='subTitle'
              type="text" defaultValue={data.subTitle}/></h3>
        <hr/>
      </div>
    )

    return data.edit ? editing : presentation
  }
}

PageTitle.displayName = 'PageTitle'
export default PageTitle
