import React, { Component } from 'react';
import { ThemeContext } from './theme-context';

class Button extends Component {
    static contextType = ThemeContext;
    render() {
        const theme = this.context;
        const style = {
            color: theme.foreground,
            backgroundColor: theme.background
        };
        return (
            <div>
                <button style={style} onClick={this.props.changeTheme}>
                    点我
                </button>
            </div>
        );
    }
}

export default Button;
