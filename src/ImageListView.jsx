import React, {Component} from 'react';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom';
import DetailView from './DetailView';
import './App.css';

class ImageListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    handlePopup = (e) => {
        this.setState({
            isOpen: true,
        })
    }

    showListView = (images) => {
        return images[0].data.results.map((result, index) => {
            return (
            <div className="flex-container">
                <Router>
                <div className="image" key={`${index.toString()}`}>
                  <Link to="/images"><img id={`${index.toString()}`} height="300rem" width="300rem" src={result.urls['raw']} onClick={this.handlePopup} alt="unknown gallery"/></Link>   
                 </div>
                 <Route path="/images">
    {this.state.isOpen ? <DetailView id={`${index.toString()}`} url={result.urls['raw']} downloadLink={result.links['download']}/> : null}
    </Route>
                 </Router> 
            </div>
            )
         }) 
    }

    render() {
        const { listView, isLoading } = this.props;
        let displayContent;
        if(isLoading) {
            displayContent = this.showListView(listView);
        } else {
            displayContent = <div className="text">Please type in something and hit enter...</div>
        }
        return(displayContent);
    }
}

export default ImageListView;