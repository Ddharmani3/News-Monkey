import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class news extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: "science",
   
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  defaultimg = "https://media.istockphoto.com/vectors/megaphone-with-exciting-news-speech-bubble-banner-loudspeaker-can-be-vector-id1304042028?k=20&m=1304042028&s=612x612&w=0&h=v-D1IP4IEZpvjCbK3BeUzgigwvh_1MEifPyahLTEAc8=";
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalres: 0,
      infscroll: true
    }
  }

  async update(page) {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d9e8c91dea584e409f969b11f46fd82f&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles,totalres:parsedData.totalResults, loading: false })
  }

  async componentDidMount() {
    this.update()
  }

  handleNextClick = async () => {
    this.setState({
      page: this.state.page + 1,
    })
    this.update();
  }
  handlePrevClick = async () => {


    this.setState({
      page: this.state.page - 1,
    })
    this.update();

  }

  fetchMoreData=async ()=>{
    this.setState({page:this.state.page+1})
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d9e8c91dea584e409f969b11f46fd82f&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ articles:this.state.articles.concat(parsedData.articles),totalres:parsedData.totalResults, loading: false })
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

  render() {
    return (
      <>
        <h1 className="text-center mb-3" style={{marginTop:"75px"}}>Top {this.capitalizeFirstLetter(this.props.category)} Headline by News Monkey</h1>
        {/* {this.state.loading && <Spinner />} */}

       
          
        <InfiniteScroll
  dataLength={this.state.articles.length} 
  next={this.fetchMoreData}
  hasMore={this.state.articles.length!==this.state.totalres}
  loader={<Spinner/>}
    endMessage={
      
          <Spinner/>
          
    //       if(this.state.articles.length===this.state.totalres){
    // <p style={{ textAlign: 'center' }}>
    //   <b>Yay! You have Read all the headlines for {this.capitalizeFirstLetter(this.props.category)} Category</b>
    // </p>}
  }> 
    <div className="container">

    <div className="row">
        {this.state.articles.map((ele) => {
          return <div className="col-md-4" key={ele.url}>
              <NewsItem title={ele.title ? ele.title : ""} description={ele.description ? ele.description : ""} imgurl={ele.urlToImage ? ele.urlToImage : this.defaultimg} newsurl={ele.url} author={ele.author} date={ele.publishedAt} />
            </div>
          })}

          </div>
          </div>
     </InfiniteScroll>

     {/* <div className="container">

<div className="row">
    {this.state.articles.map((ele) => {
      return <div className="col-md-4" key={ele.url}>
          <NewsItem title={ele.title ? ele.title : ""} description={ele.description ? ele.description : ""} imgurl={ele.urlToImage ? ele.urlToImage : this.defaultimg} newsurl={ele.url} author={ele.author} date={ele.publishedAt} />
        </div>
      })}

      </div>
      </div>
          <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrevClick} className="btn btn-dark">&larr;Previous</button>

            <button disabled={this.state.page + 1 > Math.ceil((this.state.totalres) / 9)} type="button" onClick={this.handleNextClick} className="btn btn-dark">Next&rarr;</button>
          </div> */}


        </>
    );
  }
}

export default news;
