import React, { Component } from "react";
import "./App.css";
import ButtonMenu from "./components/ButtonMenu";
import ContentWindow from "./components/ContentWindow";

class App extends Component {
    constructor() {
        super();
        this.state = {
            category: ''
        };
    }

    names = [
        'planets',
        'spaceships',
        'vehicles',
        'people',
        'films',
        'species'
    ]

    filterCategory = (i) => {
        this.setState({
            category: this.names[i]
        })
    }

    render() {
        return (
            <div className="App">
                <h1>StarWars API</h1>
                <ButtonMenu names={this.names} onClick={i => this.filterCategory(i)} />
                <ContentWindow category={this.state.category}/>
            </div>
            );
        }
    }

export default App;
