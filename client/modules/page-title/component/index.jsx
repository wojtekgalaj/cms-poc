import React from 'react'

const PageTitle = ({data}) => {
  console.log('Page title Data ', data);
  return (
    <div>
      <h1>{data.title}</h1>
      <h3>{data.subTitle}</h3>
    </div>

  )
}

export default PageTitle
