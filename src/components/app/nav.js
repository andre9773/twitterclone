import React from 'react';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Navigation",
            subtitle: 'Main menu',
            show: 'show'
        }

    }
    showNaw = () => {
        this.setState({ show: "hide" });
    }


    render() {
        let nav = this.props.nav;
        return (
            <nav>
                <button type="button" onClick={this.showNaw }>Show menu</button>
                <h1>{this.state.title}</h1>
                <h2>{this.state.subtitle}</h2>
                <p>{this.state.show}</p>
                <ul>
                    {Object.keys(nav).map(elem => {
                        return <li><a href="{nav[elem]}">{elem}</a></li>
                    } )}
                </ul>
            </nav>
        );
    }
}


export default Nav;