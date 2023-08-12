import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'

export const Photos = ({openUserName}) => {
    const params = useParams();

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${params.id}`)
        .then((response) => response.json())
        .then((json) => {setPhotos(json)});
    }, [])

    return (
        <div className="photo-page-container">
            <Link to='/' className="button users-albums-button">На головну</Link>
            <h1 className="photo-page-title">Фотографії {openUserName}</h1>
            <div className="photo-page-header">
                <h2>Назва фотографії</h2>
                <h2>Посилання</h2>
            </div>
            {photos.map(el => (
            <div key={el.id} className="photo-page-header photo-header">
                <p>{el.title}</p>
                <div>
                <a href={el.url} className='button get-photo-button'>Завантажити фото</a>
                </div>
            </div>
        ))}
        </div> 
    )
}