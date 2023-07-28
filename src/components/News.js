import React, {Component} from 'react'
import NewsItem from './NewsItem';
import { Spinner } from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {
  static  defaultProps = {
     country : 'in',
     pageSize : 10,
     category: 'general'
  }

  static propTypes = {
    country : PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1

    }
  }

  async componentDidMount(){
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=3f8d773dd9d041959eb5059c4bf52a36&pagesize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles, totalArticles: parsedData.totalResults, loading:false})

  }

  handlePrevClick =async () => {
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=3f8d773dd9d041959eb5059c4bf52a36&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
  this.setState({
    page: this.state.page -1,
    articles: parsedData.articles,
    loading:false
  })
 }

  handleNextClick = async () => {
  if(!(this.state.page +1 > Math.ceil(this.state.totalResults/20))){
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=3f8d773dd9d041959eb5059c4bf52a36&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()

    this.setState
    ({
      page: this.state.page +1,
      articles: parsedData.articles,
      loading:false
    })
  }
}

  render() {
    return (
      <div className="container my-3">
      <h1 className="text-center">
        <h2  id="header">News Network - Top Headlines</h2>
        </h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0,80) : ""}
                description={element.description ? element.description.slice(0,79): ""}
                imgUrl={element.urlToImage || ""}
                newsUrl={element.url || ""}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              /> 
            </div>;
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous Page</button>
          <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next Page &rarr;</button>
        </div>
      </div>
    );
  }
}
