import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';
import ListGroup from 'react-bootstrap/ListGroup';

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {

    const elemments = posts.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <li key={id} className='list-group-item'>
                <PostListItem
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id) }
                />
            </li>
            )
    })

    return (
        <ListGroup className="app-list list-group">
            {elemments }
        </ListGroup>
        )
}
export default PostList;