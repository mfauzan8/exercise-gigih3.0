import React from 'react'
import { Data } from './Data'

const dataCard = Data

const Card = () => {

    return (
        <>
            {dataCard.map((list) => {
                return (
                    <div class="card">
                        <img src={list.url} alt="Card Image" />
                        <div div class="card-content" >
                            <h2>Song {list.id}</h2>
                            <p>This is the content of the card. Lorem ipsum dolor sit </p>
                            <a href="#" class="btn">+ Add to playlist</a>
                        </div >
                    </div >
                )
            })}
        </>
    )
}

export default Card