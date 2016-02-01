import React from 'react'

const TextBlock = ({data}) => {
  return (
    <div>
      <small>Position on page: {data.positionOnPage}</small>
      <p>{data.text}</p>
    </div>
  )
}

TextBlock.displayName = 'TextBlock'
export default TextBlock
