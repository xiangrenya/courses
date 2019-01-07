import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Index extends Component {
    render() {
        return (
            <div>
                <Link to="/todo">Todo</Link>
                <Link to="/button">Button</Link>
            </div>
        );
    }
}

export default Index;
