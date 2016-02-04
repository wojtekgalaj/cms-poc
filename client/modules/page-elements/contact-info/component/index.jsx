import React from 'react'

this.displayName = 'ContactInfo'
class ContactInfo extends React.Component {

  updatePageModel() {
    const {Session, data} = this.props
    const {tel, email} = this.refs
    const pageModel = Session.get('currentPage')

    if (!data.edit) return;

    pageModel.elements[data.positionOnPage] = {
      component: 'ContactInfo',
      data: {
        tel: tel.value,
        email: email.value
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
        <hr/>
        <p>Tel: {data.tel}</p>
        <p>email: {data.email}</p>
      </div>
    )

    const editing = (
      <div>
        <hr/>
        <label>Tel</label>
        <input
          onChange={this.onInputChange.bind(this)}
          type="text" ref="tel" defaultValue={data.tel}/>
        <label>eMail</label>
        <input
          onChange={this.onInputChange.bind(this)}
          type="text" ref="email" defaultValue={data.email}/>
      </div>
    )

    return data.edit ? editing : presentation
  }
}

ContactInfo.displayName = 'ContactInfo'
export default ContactInfo
