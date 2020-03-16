import React, { Component } from 'react';
import '../App.css';
import { Link, withRouter } from 'react-router-dom';

class DetailView extends Component {
  
  handleBack = () => {
    this.props.history.goBack()
  }

   componentDidMount() {
    const { open } = this.props;
    var modal = document.getElementById("myModal");
    open ? modal.style.display = "block" : modal.style.display = "none";
    window.addEventListener('click' , (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
        this.handleBack();
      }
    })
   }

    render() {
        const { url, downloadLink, onClose } = this.props;
        return(
            <div id="myModal" className="modal">
            <div className="modal-content">
             <Link to="/"><span className="close" onClick={onClose}>&times;</span></Link>
              <div className="image-position">
              <img height="500rem" width="500rem" src={url} alt="unknown gallery"/>
              </div>
              <a title="Download photo" href={`${downloadLink}?force=true`} rel="nofollow" download>
                <span className="svg-position">
                <svg version="1.1" viewBox="0 0 32 32" width="32" height="32" aria-hidden="false" style={{fill: 'green'}}>
                  <path d="M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z"></path>
                  </svg>
              </span>
              </a>
            </div>
          </div>
        );
    }
}

export default withRouter(DetailView);