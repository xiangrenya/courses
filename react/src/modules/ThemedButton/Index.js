import React, { Component } from 'react';
import { ThemeContext, themes } from './theme-context';
import Button from './Button';

class ThemedButton extends Component {
    state = {
        theme: themes.dark
    };

    changeTheme = () => {
        this.setState(state => ({
            theme: state.theme === themes.light ? themes.dark : themes.light
        }));
    };
    
    render() {
        return (
            <ThemeContext.Provider value={this.state.theme}>
                <Button changeTheme={this.changeTheme} />
            </ThemeContext.Provider>
        );
    }
}

export default ThemedButton;
