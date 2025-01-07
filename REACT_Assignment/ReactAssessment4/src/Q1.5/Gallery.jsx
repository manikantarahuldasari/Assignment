// Using require.context


import React from 'react'

function Gallery({images}) {
  return (
    <div> {images.map((key, index) => (
      <img
        key={index}
        src={key}
        alt={`Image ${index + 1}`}
        style={{ width: '200px',height:"300px" }}
      />
    ))}</div>
  )
}

export default Gallery