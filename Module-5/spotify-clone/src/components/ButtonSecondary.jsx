import React from 'react'

const ButtonSecondary = ({ tab, handleOnClickTabbing }) => {
    return (
        <div className='wrap'>
            {tab.map((item, idx) => (
                <button key={idx} className={item.status ? 'btn-white' : 'btn'} name={item.name} onClick={(e) => handleOnClickTabbing(e.target.name)}>{item.name}</button>
            ))
            }
        </div>
    )
}

export default ButtonSecondary