import React from 'react'

const PageTitle = ({data}) => {


  const presentation = (
    <div>
      <small>Position on page: {data.positionOnPage}</small>
      <h1>{data.title}</h1>
      <h3>{data.subTitle}</h3>
    </div>
  )

  const editing = (
    <div>
      <small>Position on page: {data.positionOnPage}</small>
      <h1><input type="text" value={data.title}/></h1>
      <h3><input type="text" value={data.subTitle}/></h3>
    </div>
  )
  return data.edit ? editing : presentation

}

PageTitle.displayName = 'PageTitle'
export default PageTitle
