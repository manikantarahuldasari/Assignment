import React from 'react'

function UserProfile() {
    var profile = {
        name: "Alice",
        age: 32,
        location: "New York"

    }

    return (
        <div className='mt-5'>
            <p>User Name:{profile.name} <br />
                Age:{profile.age} <br />
                Location:{profile.location}</p>
            {

                profile.age > 30 ? "welcome ,Mature User" : "none"
            }

        </div>
    )





}

export default UserProfile