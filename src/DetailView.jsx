import React, { Component } from 'react';
import './App.css';

class DetailView extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
  }

   componentDidMount() {
    const { id } = this.props;
    var modal = document.getElementById("myModal");

    var imgElement = document.getElementById(id);
    
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on the image open the modal
    imgElement.onclick = function() {
      modal.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }
   }

    render() {
        const { url, downloadLink } = this.props;
        return(
            <div id="myModal" className="modal">
            <div className="modal-content">
              <span className="close">&times;</span>
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

export default DetailView;