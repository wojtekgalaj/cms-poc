import React from 'react'

class PageTitle extends React.Component {

  updatePageModel() {
    const {Session, data} = this.props
    const {title, subTitle} = this.refs
    const pageModel = Session.get('currentPage')

    if (!data.edit) return;

    pageModel.elements[data.positionOnPage] = {
      component: 'PageTitle',
      data: {
        title: title.value,
        subTitle: subTitle.value
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
    const {data} = this.props
    const presentation = (
      <div>
        <h1>{data.title}</h1>
        <h3>{data.subTitle}</h3>
      </div>
    )

    const editing = (
      <div>
        <h1><input
              onChange={this.onInputChange.bind(this)}
              ref='title'
              type="text" defaultValue={data.title}/></h1>
        <h3><input
              onChange={this.onInputChange.bind(this)}
              ref='subTitle'
              type="text" defaultValue={data.subTitle}/></h3>
      </div>
    )

    return data.edit ? editing : presentation
  }
}

PageTitle.displayName = 'PageTitle'
export default PageTitle
