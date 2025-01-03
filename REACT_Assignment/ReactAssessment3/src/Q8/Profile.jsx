import React from 'react'

function Profile(user) {
   
  return (
    <div style={{width:"300px",height:"400px",boxShadow:"0 0 10px green",margin:"30px auto"}}>
        <img src={user.image} alt="" width={"300px"} height={"300px"}/>
        
        <div>
            
        <h1 style={{textAlign:'center'}}>{user.name}</h1>
        <p style={{textAlign:'center'}}>{user.Bio}</p></div>
    </div>
  )
}

export default Profile