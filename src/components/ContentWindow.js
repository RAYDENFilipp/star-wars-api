import React, { Component } from "react";
import SearchBox from "./SearchBox";
import CardsList from "./CardsList";

export class ContentWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchField: "",
            results: [],
            category: props.category
        };
    }

    onSearch = e => {
        this.setState({
            searchField: e.target.value
        });
    };

    componentDidMount = (category) => {
        fetch(`https://swapi.co/api/people`)
            .then(response => response.json())
            .then(object => {
                let arr = [];

                object.results.map(item => {
                    return arr.push(item.name);
                });
                this.setState({
                    results: arr
                });
            });
    };

    render() {
        const { searchField, results, category } = this.state;
        const list = results.filter( name =>
            name.toLowerCase()
                .includes(searchField.toLowerCase())
            )
        if (category) {
            return (
                <div>
                    <SearchBox searchField={searchField} input={this.onSearch} />
                    <CardsList category={category} list={list} />
                </div>
            );
        }
        return null
    }
}

export default ContentWindow;
