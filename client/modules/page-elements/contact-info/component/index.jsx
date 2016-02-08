import React from 'react'
import ElementUtils from '/client/utils/utils'

this.displayName = 'ContactInfo'
class ContactInfo extends React.Component {

  componentDidMount() {
    ElementUtils.updatePageModel(this.props, this.refs, 'ContactInfo')
  }

  componentDidUpdate() {
    ElementUtils.updatePageModel(this.props, this.refs, 'ContactInfo')
  }

  onInputChange() {
    ElementUtils.updatePageModel(this.props, this.refs, 'ContactInfo')
  }

  render() {
    const {data} = this.props
    const presentation = (
      <div>
        <hr/>
        <p ref='tel'>Tel: {data.tel}</p>
        <p ref='email'>email: {data.email}</p>
      </div>
    )

    const editing = (
      <div>
        <hr/>
        <small>Contact Info</small>
        <label>Tel</label>
        <input
          ref='tel'
          onChange={this.onInputChange.bind(this)}
          type="text" ref="tel" defaultValue={data.tel}/>
        <label>eMail</label>
        <input
          ref='email'
          onChange={this.onInputChange.bind(this)}
          type="text" ref="email" defaultValue={data.email}/>
        <hr/>
      </div>
    )

    return data.edit ? editing : presentation
  }
}

ContactInfo.displayName = 'ContactInfo'
export default ContactInfo
