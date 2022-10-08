import React from 'react';
import Nav from './nav.js'

export default class NavApp extends React.Component {
    render() {
        let nav = this.props.nav;
        const title = this.props.title;
        const discription = this.props.discription;
        return (
            <div>
                <h1>{title}</h1>
                <p>{discription}</p>
                <Nav nav={nav}/>
            </div>
            )

    }
}
