import React from "react"
import {HeartIcon, HeartFillIcon, SyncIcon} from '@primer/octicons-react'

class Quote extends React.Component {
  constructor() {
    super()
    this.state = {
      quotes: [],
      quote: '',
      liked: false
    }
    this.getQuote = this.getQuote.bind(this)
    this.setQuote = this.setQuote.bind(this)
    this.likeQuote = this.likeQuote.bind(this)
  }

  likeQuote() {
    this.setState(prevState => ({
      liked: !prevState.liked
    }))
  }
  
  componentDidMount() {
    this.setState({
      quotes: require('../quotes.json')
    })
  }

  getQuote() {
    return this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)]
  }

  setQuote() {
    let q = this.getQuote()
    if (this.state.quote === q.quote) {
      let q = this.getQuote()
    }
    this.setState({
      quote: q.quote,
      liked: q.liked
    })
  }

  render() {
    if (this.state.quote === '') {
      return <button onClick={this.setQuote} className="button is-primary is-medium">Get Legal Advice</button>
    }
    return (
      <div className="card">
        <div className="card-content">
          <div className="content">
          {this.state.quote}
          </div>
        </div>
        <footer className="card-footer">
          <a href="#"
            onClick={this.likeQuote}
            className="has-text-danger card-footer-item">
            {this.state.liked ? <HeartFillIcon size="medium" /> : <HeartIcon size="medium" />}
          </a>
          <a href="#"
            onClick={this.setQuote}
            className="has-text-info card-footer-item">
            <SyncIcon size="medium" />
          </a>
        </footer>
      </div>
    )
  }
}

export default Quote