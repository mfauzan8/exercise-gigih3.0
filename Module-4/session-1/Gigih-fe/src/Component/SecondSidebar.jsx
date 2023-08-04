import React from 'react'

const SecondSidebar = () => {
    return (
        <div className="second-sidebar">
            <div href="#" className="border-top-side">
                <span>
                    <img src="src\assets\svg\playlist.svg" alt="playlist" />
                </span>
                Playlist
                <a href="#">
                    <img src="src\assets\svg\plus.svg" alt="plus" />
                </a>
            </div>
            <div className="playlist-container">
                <h3>Buat playlist pertamamu</h3>
                <h4>Caranya mudah, kami akan membantumu</h4>
                <button className="btn-white">Buat Playlist</button>
            </div>
        </div>
    )
}

export default SecondSidebar