import React, {Component} from 'react';
import axios from 'axios';
import ImageListView from './ImageListView';
import swal from 'sweetalert';
import './App.css'

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            list: [],
            random: [],
            isLoading: false,
        };
        this.ref = React.createRef();
    }

    componentDidMount() {
        let newState = [...this.state.random];
        window.addEventListener('load', () => {
            axios.get('https://api.unsplash.com/photos/random?client_id=v8pmF3vkmzMEGpcSEfLfTLNNesvssIRJsJW_QNBqmhI').then(response => {
                newState  = [...this.state.random, response];
                this.setState({
                    random: newState,
                }, () => {
                    let domElement = document.getElementById('randomImage');
                    this.state.random.forEach(element => {
                        domElement.style.backgroundImage = `url(${element.data.urls['raw']})`;
                    });
                })
            }).catch((err) => {
                swal("Oops!", "Seems like background image could not be loaded", "error");
            })
        })
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            value: e.target.value
        })
    }

    makeApiCall = (e) => {
        e.preventDefault();
        let newState = {...this.state};
        axios.get('https://api.unsplash.com/search/photos/', {
            params: {
                query: `${this.ref.current.value}`,
                per_page: 9,
                client_id: 'v8pmF3vkmzMEGpcSEfLfTLNNesvssIRJsJW_QNBqmhI',
            }
        }).then(response => {
            newState.list = [...this.state.list, response];
            this.setState({
                list: newState.list,
                isLoading: true,
            })
        }).catch(err => {
            swal("Oops!", "Seems like we couldn't fetch the info", "error");
        })
    }
    

    render() {
        const { list, isLoading } = this.state;
        return(
        <>
        <div id="randomImage" className="input">
        <form className="forms" onSubmit={this.makeApiCall}>
        <button title="Search" className="button-element" type="submit">
        <svg className="photo" version="1.1" viewBox="0 0 32 32" width="32" height="32" aria-hidden="false">
        <path d="M31 28.64l-7.57-7.57a12.53 12.53 0 1 0-2.36 2.36l7.57 7.57zm-17.5-6a9.17 9.17 0 1 1 6.5-2.64 9.11 9.11 0 0 1-6.5 2.67z">
        </path>
        </svg>
        <span className="searching">Search</span></button>
        <div className="content">
        <input ref={this.ref} type="search" autoComplete="off" className="input-box" name="searchKeyword" 
                placeholder="Search anything" required id="searchIt" title="Search" 
                autoCapitalize="none" spellCheck="false" value={this.state.value}
                onChange={this.handleChange}>
        </input>
        </div>
        </form>
        </div>
        <div>
        {<ImageListView listView={list} isLoading={isLoading} />}
       </div>
      </>
      );
    }
}

export default SearchBar;