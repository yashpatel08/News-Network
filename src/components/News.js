import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { Spinner } from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      allArticlesFetched: false, 
    };
    document.title = `${this.capitalize(this.props.category)} - News Network`;
  }

  async updateNews() {
    const url = `https://inshorts.deta.dev/news?country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
     
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,  
      totalArticles: parsedData.totalResults,
      loading: false,
      allArticlesFetched: parsedData.articles.length === 0,
    });
  }
  async componentDidMount() {
    // let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=3f8d773dd9d041959eb5059c4bf52a36&page=1&pagesize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // this.setState({articles: parsedData.articles, totalArticles: parsedData.totalResults, loading:false})

    this.updateNews();
  }

  handlePrevClick = async () => {
    //   let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=3f8d773dd9d041959eb5059c4bf52a36&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
    //   this.setState({loading:true});
    //   let data = await fetch(url);
    //   let parsedData = await data.json()
    // this.setState({
    //   page: this.state.page -1,
    //   articles: parsedData.articles,
    //   loading:false
    // })

    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };

  handleNextClick = async () => {
    //   if(!(this.state.page +1 > Math.ceil(this.state.totalResults/20))){
    //   let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=3f8d773dd9d041959eb5059c4bf52a36&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
    //   this.setState({loading:true});
    //   let data = await fetch(url);
    //   let parsedData = await data.json()

    //   this.setState
    //   ({
    //     page: this.state.page +1,
    //     articles: parsedData.articles,
    //     loading:false
    //   })
    // }

    this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
  };

  fetchMoreData = async () => {
    
    this.setState({ page: this.state.page + 1 });
    const url = `https://inshorts.deta.dev/news?country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalArticles: parsedData.totalResults,
      
    })
    if (parsedData.articles.length === 0) {
      // If no more articles are fetched, set allArticlesFetched to true
      this.setState({ allArticlesFetched: true });
    }
  };

  render() {    
    return (
      <div>
        <h1 className="text-center">
          <h2 id="header">
            News Network - Top {this.capitalize(this.props.category)} Headlines
          </h2>
        </h1>
       {this.state.loading && this.state.articles.length ===0 && <Spinner />}
       {!this.state.loading && (
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={!this.state.allArticlesFetched}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (<div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 80) : ""}
                      description={ element.description ? element.description.slice(0, 79) : "" } imgUrl={element.urlToImage || ""} newsUrl={element.url || ""} author={element.author} date={element.publishedAt} source={element.source.name}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </InfiniteScroll>
       )}
        
      </div>
    );
  }
}
