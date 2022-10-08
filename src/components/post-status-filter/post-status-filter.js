import React, { Component } from 'react';
import './post-status-filter.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default class PostStatusFilter extends Component{
    constructor(props) {
        super(props);

        this.buttons = [
            { name: 'all', label: 'All' },
            { name: 'like', label: 'Like' }

        ]
    }

    render() {
        const buttons = this.buttons.map(({ name, label }) => {
            const active = this.props.filter === name;
            const clazz = active ? 'btn-info' : 'btn-outline-secondary'

            return (
                <Button
                    key={name}
                    variant="secondary"
                    className={`btn ${clazz}`}
                    onClick={() => this.props.onFilterSelect(name) }
                >{label}</Button>
                )
        });


        return (
            <>
                <ButtonGroup >
                    {buttons }
                </ButtonGroup>
            </>

        )
    }
    
}
