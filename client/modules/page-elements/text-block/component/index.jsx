import React from 'react'

class TextBlock extends React.Component {

  fillInTheBlanks(data) {
    data.title = data.title || 'Placeholder'
    data.subTitle = data.subTitle || 'Placeholder'
    return data
  }

  updatePageModel() {
    const {Session} = this.props
    let {data} = this.props
    const {text} = this.refs
    const pageModel = Session.get('currentPage')

    data = this.fillInTheBlanks(data)

    if (!data.edit) return;

    pageModel.elements[data.positionOnPage] = {
      component: 'TextBlock',
      data: {
        text: text.value
      }
    }
    Session.set('currentPage', pageModel)

  }

  onInputChange() {
    this.updatePageModel()
  }

  componentDidMount() {
    this.updatePageModel()
  }

  render() {
    const {data} = this.props

    const presentation = (
      <div>
        <p>{data.text}</p>
      </div>
    )

    const editing = (
      <div>
        <hr/>
        <input
          onChange={this.onInputChange.bind(this)}
          type='text' ref='text' defaultValue={data.text}/>
        <hr/>
      </div>
    )

    return data.edit ? editing : presentation
  }
}

TextBlock.displayName = 'TextBlock'
export default TextBlock
