import React from 'react'
import ElementUtils from '/client/utils/utils'


class PageTitle extends React.Component {

  componentDidMount() {
    ElementUtils.updatePageModel(this.props, this.refs, 'PageTitle')
  }

  componentDidUpdate() {
    ElementUtils.updatePageModel(this.props, this.refs, 'PageTitle')
  }

  onInputChange() {
    ElementUtils.updatePageModel(this.props, this.refs, 'PageTitle')
  }

  render() {
    const {data} = this.props
    const presentation = (
      <div>
        <h1 ref='title'>{data.title}</h1>
        <h3 ref='subTitle'>{data.subTitle}</h3>
      </div>
    )

    const editing = (
      <div>
        <hr/>
        <small>Page Title</small>
        <h1><input
              onChange={this.onInputChange.bind(this)}
              ref='title'
              type="text" defaultValue={data.title || 'placeholder'}/></h1>
        <h3><input
              onChange={this.onInputChange.bind(this)}
              ref='subTitle'
              type="text" defaultValue={data.subTitle || 'placeholder'}/></h3>
        <hr/>
      </div>
    )

    return data.edit ? editing : presentation
  }
}

PageTitle.displayName = 'PageTitle'
export default PageTitle
