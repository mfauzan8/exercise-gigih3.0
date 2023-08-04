import React from 'react'

const TopSidebar = () => {
    return (
        <div className="top-sidebar">
            <a href="#" className="border-top-side">
                <span>
                    <img src="src\assets\svg\home.svg" alt="home" />
                </span>
                Home
            </a>
            <a href="#" className="border-top-side">
                <span>
                    <img src="src\assets\svg\search.svg" alt="search" />
                </span>
                Cari
            </a>
        </div>
    )
}

export default TopSidebar