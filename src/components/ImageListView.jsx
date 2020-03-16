import React, {Component} from 'react';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom';
import DetailView from './DetailView';
import '../App.css';

class ImageListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            imageUrl: '',
            downloadLink: ''
        }
    }

    onCloseHandler = () => {
        this.setState({
            showPopup: false,
            imageUrl: '',
            downloadLink: ''
        })
    }

    handleShowPopup = (e) => {
        this.setState({
            showPopup: true,
            imageUrl: e.target.src,
            downloadLink: e.target.getAttribute('link')
        })
    }

    showListView = (images) => {
        const { showPopup, imageUrl, downloadLink } = this.state;
        let displayContent
        displayContent = images.map((result, index) => {
                   return <div className="flex-container">
                        <Router>
                        <div className="image" key={`${index.toString()}`}>
                          <Link to={`/images/${index.toString()}`}>
                            <img id={`${index.toString()}`} height="300rem" width="300rem" src={result.urls['raw']} link={result.links['download']} onClick={this.handleShowPopup} alt="unknown gallery"/></Link>   
                         </div>
                         <Route path="/images">
                            {
                            showPopup ? <DetailView url={imageUrl} downloadLink={downloadLink} open={showPopup} onClose={this.onCloseHandler}/> : null
                            }
                        </Route>
                         </Router> 
                    </div>
                  
               });
        return displayContent;
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