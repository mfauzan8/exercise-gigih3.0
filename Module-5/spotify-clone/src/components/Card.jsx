import React from 'react'

const Card = ({ dataAlbum, data }) => {
    console.log(data)

    return (
        <div className='card-container'>
            {
                dataAlbum.length == 0 ?
                    (
                        data.map((item) => (
                            <a style={{ textDecoration: 'none' }} href={item.href} key={item.id}>
                                <div className="card">
                                    <img src={item.album.images[1].url} alt="Card Image" />
                                    <div div className="card-content" >
                                        <h2>{item.name.length > 20 ? item.name.substring(0, 20) + "..." : item.name}</h2>
                                        <p>{item.album.release_date.substring(0, 4)} <span>.</span> {item.artists[0].name}</p>
                                    </div >
                                </div >
                            </a>
                        ))
                    )
                    :
                    (
                        dataAlbum.map((item) => (
                            <a style={{ textDecoration: 'none' }} href={item.href} key={item.id}>
                                <div className="card">
                                    <img src={item.images[1].url} alt="Card Image" />
                                    <div div className="card-content" >
                                        <h2>{item.name.length > 20 ? item.name.substring(0, 20) + "..." : item.name}</h2>
                                        <p>{item.release_date.substring(0, 4)} <span>.</span> {item.artists[0].name}</p>
                                    </div >
                                </div >
                            </a>
                        ))
                    )
            }
        </div>
    )
}

export default Card