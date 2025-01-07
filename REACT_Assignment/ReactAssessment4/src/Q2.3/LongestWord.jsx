import React from 'react'

function LongestWord({words}) {
    var max=""
    for (var key of words){
        if(max.length<key.length){
            max=key
        }
    }
  return (
    <div>Longest Word:{max}</div>
  )
}

export default LongestWord