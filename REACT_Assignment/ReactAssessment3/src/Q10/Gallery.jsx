import React from 'react'
import "./Gallery.css"
function Gallery({ images }) {
    return (
        <div className='gridcontainer'>
            <div className='item1'>
                <img src={images[0].url} width={"300px"} />
            </div>
            <div className='item2'>
                <img src={images[1].url} width={"300px"} height={"220px"} />
            </div>
            <div className='item3'>
                <img src={images[2].url} width={"300px"} height={"220px"}/>
            </div>
            <div className='item4'>
                <img src={images[3].url} width={"300px"} height={"220px"}/>
            </div>

        </div>
    )
}

export default Gallery