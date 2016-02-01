import React from 'react'

const TextBlock = ({data}) => {
  console.log('TextBlock Data ', data);
  return (
    <p>{data.text}</p>
  )
}

export default TextBlock
