import React from 'react'

this.displayName = 'ContactInfo'
const ContactInfo = ({data}) => {
  return (
    <div>
      <hr/>
      <p>Tel: {data.tel}</p>
      <p>email: {data.email}</p>
    </div>
  )
}

export default ContactInfo
