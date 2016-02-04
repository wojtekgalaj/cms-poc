import React from 'react'

class TextBlock extends React.Component {


  updatePageModel() {
    const {Session, data} = this.props
    const {text} = this.refs
    const pageModel = Session.get('currentPage')

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
        <input
          onChange={this.onInputChange.bind(this)}
          type='text' ref='text' defaultValue={data.text}/>
      </div>
    )

    return data.edit ? editing : presentation
  }
}

TextBlock.displayName = 'TextBlock'
export default TextBlock
