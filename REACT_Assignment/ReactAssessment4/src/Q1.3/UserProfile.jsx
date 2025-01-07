import React from "react";
const UserProfile=({name,email})=>{
    return(
        <div>
        <h1>Name:{name}</h1>
        <h1>email:{email}</h1>
        </div>
    )
}

export default UserProfile;