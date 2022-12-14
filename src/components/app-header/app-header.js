import React from 'react';
import './app-header.css';



const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>Ivan Petrych</h1>
            <h2>{allPosts} news, { liked} like</h2>
        </div>
        )
}


export default AppHeader;