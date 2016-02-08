import React from 'react'
import MyUtils from '/client/utils/utils'


class PageTitle extends React.Component {

  componentDidMount() {
    MyUtils.updatePageModel(this.props, this.refs, 'PageTitle')
  }

  onInputChange() {
    MyUtils.updatePageModel(this.props, this.refs, 'PageTitle')
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
