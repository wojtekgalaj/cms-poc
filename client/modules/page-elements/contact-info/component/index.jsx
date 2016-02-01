import React from 'react'

this.displayName = 'ContactInfo'
const ContactInfo = ({data}) => {
  return (
    <div>
      <hr/>
      <small>Position on page: {data.positionOnPage}</small>
      <p>Tel: {data.tel}</p>
      <p>email: {data.email}</p>
    </div>
  )
}

ContactInfo.displayName = 'ContactInfo'
export default ContactInfo
