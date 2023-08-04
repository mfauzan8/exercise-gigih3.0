import React, { useState } from 'react'
import ButtonSecondary from './ButtonSecondary'

const Tabbing = ({ tab, setTab }) => {

    const handleOnClickTabbing = (e) => {
        const updateTab = tab.map(item => {
            if (item.name === e) {
                return ({ ...item, status: true })
            } else {
                return ({ ...item, status: false })
            }
        })
        setTab(updateTab)
    }
    return (
        <ButtonSecondary tab={tab} handleOnClickTabbing={handleOnClickTabbing} />
    )
}

export default Tabbing