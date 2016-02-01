import React from 'react'

const TextBlock = ({data}) => {
  console.log('TextBlock Data ', data);
  return (
    <div>
      <small>Position on page: {data.positionOnPage}</small>
      <p>{data.text}</p>
    </div>
  )
}

export default TextBlock
