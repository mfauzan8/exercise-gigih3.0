import React from 'react'

const Avatar = ({ data }) => {
    return (
        <div className='container'>
            <h1>{data.name}</h1>
            <img style={{ borderRadius: "50%" }} src={data.image} alt="" />
            <h2>Gender: {data.gender}</h2>
        </div>
    )
}

export default Avatar