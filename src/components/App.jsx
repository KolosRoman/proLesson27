import React, {useState} from 'react';

import {Users} from './users/Users.jsx';
import {Route, Routes} from 'react-router-dom'
import {Albums} from './users/Albums.jsx';
import {Photos} from './users/Photos.jsx';

export const App = () => {
    const [userName, setUserName] = useState('');

    const getName = (userName) => {
        setUserName(userName)
    }


    return (
        <main>
            <Routes>
                <Route path="/" element={<Users getUserName={getName}/>}>
                    <Route path=':id' element={<Albums/>}>
                    </Route>
                </Route>
                <Route path=':id/:id' element={<Photos openUserName={userName}/>}>
                </Route>
            </Routes>
        </main>
    )
}