import React, {useState, useEffect} from 'react';

import {Link, Outlet} from 'react-router-dom'


export const Users = ({getUserName}) => {
    
    const [users, setUsers] = useState([]);
    const [albums, setAlbums] = useState(0);
    const [showAlbums, setShowAlbums] = useState(false);


    const onAlbum = (userName, userID) => {
        setAlbums(userID)
        getUserName(userName)
        setShowAlbums(!showAlbums)
    }


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => {setUsers(json)});
    }, [])


    return (
        <div className='users-container'>
            <h2 className='users-title'>Список користувачів</h2>
                <div className='users-block'>
                {users.map(el => (
                    <div key={el.id}  className='user-item'>
                        <p className='users-name'>{el.name}</p>
                        <Link to={'' + el.id} onClick={() => onAlbum(el.name, el.id)} className='button users-albums-button'>Альбоми</Link>
                        {showAlbums && el.id === albums && <Outlet/>}
                    </div>
                ))}
                </div>
        </div>
    )
}