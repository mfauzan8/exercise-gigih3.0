import React, { useState, useEffect } from 'react'
import TopSidebar from '../components/TopSidebar'
import SecondSidebar from '../components/SecondSidebar'
import SearchForm from '../components/SearchForm'
import Tabbing from '../components/Tabbing'
import { useDebounce } from 'use-debounce';
import axios from 'axios';
import Card from '../components/Card'

const HomePage = ({ token }) => {
    const [searchKey, setSearchKey] = useDebounce('', 600)
    const [dataAlbum, setDataAlbum] = useState([])
    const [data, setData] = useState([])
    const [tab, setTab] = useState([
        { name: 'Recomendations', link: "", status: true },
        { name: 'Top 10', link: "limit=10&", status: false }
    ])

    useEffect(() => {
        const recomendations = async () => {
            const filteredTabs = tab.filter((item) => item.status === true);
            await axios
                .get(`https://api.spotify.com/v1/recommendations?${filteredTabs[0].link}seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((response) => {
                    setData(response.data.tracks)
                })
        }
        recomendations()
    }, [tab])

    useEffect(() => {
        const searchAlbums = async () => {
            await axios
                .get(`https://api.spotify.com/v1/search?q=${searchKey}&type=album`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((response) => {
                    setDataAlbum(response.data.albums.items)
                });
        }
        searchAlbums();
    }, [searchKey]);
    return (
        <div className="container">
            <div className="sidebar">
                <TopSidebar />
                <SecondSidebar />
            </div>
            <div className="content">
                <SearchForm setSearchKey={setSearchKey} />
                <Tabbing tab={tab} setTab={setTab} />
                <Card data={data} dataAlbum={dataAlbum} />
            </div>
        </div >
    )
}

export default HomePage