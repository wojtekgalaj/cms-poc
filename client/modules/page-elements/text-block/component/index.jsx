import React from 'react'
import ElementUtils from '/client/utils/utils'

class TextBlock extends React.Component {

  onInputChange() {
    ElementUtils.updatePageModel(this.props, this.refs, 'TextBlock')
  }

  componentDidMount() {
    ElementUtils.updatePageModel(this.props, this.refs, 'TextBlock')
  }

  componentDidUpdate() {
    ElementUtils.updatePageModel(this.props, this.refs, 'TextBlock')
  }

  render() {
    const {data} = this.props

    const presentation = (
      <div>
        <p ref='text'>{data.text}</p>
      </div>
    )

    const editing = (
      <div>
        <hr/>
        <small>Text Block</small><br/>
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
