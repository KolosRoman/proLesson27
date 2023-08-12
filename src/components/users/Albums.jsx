import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'

export const Albums = () => {
    const params = useParams();

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${params.id}`)
        .then((response) => response.json())
        .then((json) => {setAlbums(json)});
    }, [])


    return (
        <>
        {albums.map(el => (
            <div key={el.id} className='album-block'>
                <h3 className="album-block">Назва альбома '{el.title}'</h3>
                <Link to={'' + el.id} className='button album-block-button'>Фото</Link>
            </div>
        ))}
        </>   
    )
}