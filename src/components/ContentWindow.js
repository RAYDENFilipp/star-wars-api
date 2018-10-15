import React, { Component } from "react";
import SearchBox from "./SearchBox";
import CardsList from "./CardsList";

export class ContentWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchField: "",
            results: []
        };
    }

    onSearch = e => {
        this.setState({
            searchField: e.target.value
        });
    };

    fetchData() {
        fetch(`https://swapi.co/api/${this.props.category}`)
            .then(response => response.json())
            .then(object => {
                let arr = [];
                object.results.map(item => {
                    let name = Object.keys(item)[0];
                    console.log(name);
                    return arr.push(item[name]);
                });
                console.log(arr);
                this.setState({
                    results: arr
                });
            });
    }

    componentDidMount = () => {
        this.fetchData();
    }

    componentDidUpdate = prevProps => {
        if (this.props.category !== prevProps.category) {
            this.fetchData();
        }
    };

    render() {
        const { searchField, results } = this.state;
        const list = results.filter(name =>
            name.toLowerCase().includes(searchField.toLowerCase())
        );
        if (this.props.category) {
            return (
                <div>
                    <SearchBox
                        searchField={searchField}
                        input={this.onSearch}
                    />
                    <CardsList category={this.props.category} list={list} />
                </div>
            );
        }
        return null;
    }
}

export default ContentWindow;
