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
      <div className='ep-feature__header'>
        <h3 className='ep-feature__title' ref='title'>{data.title}</h3>
        <p ref='subTitle' className="ep-feature__subtitle">
          {data.subTitle}
        </p>
      </div>
    )

    const editing = (
      <div className='ep-feature__header'>
        <h3 className='ep-feature__title' ref='title'><input
              onChange={this.onInputChange.bind(this)}
              ref='title'
              type="text" defaultValue={data.title || 'placeholder'}/></h3>
        <p ref='subTitle' className="ep-feature__subtitle">
          <input
              onChange={this.onInputChange.bind(this)}
              ref='subTitle'
              type="text" defaultValue={data.subTitle || 'placeholder'}/>
        </p>
      </div>

    )

    return data.edit ? editing : presentation
  }
}

PageTitle.displayName = 'PageTitle'
export default PageTitle
