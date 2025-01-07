import React from 'react'

const UserStatus=({isOnline})=>{
    
    return (
        <div>
            <h1>
                <strong>status:</strong>
                {isOnline?"online":"offline"}
                </h1>
                </div>
    )
}

export default UserStatus;
 
