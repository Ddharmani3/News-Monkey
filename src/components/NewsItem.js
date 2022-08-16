import React, { Component } from 'react'


export class NewsItem extends Component {
  

  render() {
    let {title,description,imgurl,newsurl,author,date}=this.props;
    return (
      <div>
        
        <div className="card my-1"  >
      <img rel="noreferrer" src={imgurl} onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src="https://media.istockphoto.com/vectors/megaphone-with-exciting-news-speech-bubble-banner-loudspeaker-can-be-vector-id1304042028?k=20&m=1304042028&s=612x612&w=0&h=v-D1IP4IEZpvjCbK3BeUzgigwvh_1MEifPyahLTEAc8=";
      }}className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-muted">Last updated by {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
        <a rel="noopener noreferrer" href={newsurl} target="_blank" className="btn btn-primary">Read Full News</a>
      </div>
    </div>
      
    </div>
    )
  }
}

export default NewsItem