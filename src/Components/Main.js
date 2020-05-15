import React, {Component} from 'react'
import Photowall from './Photowall'
import AddPhoto from './AddPhoto'
import Single from './Single'
import {Route, Link} from 'react-router-dom'

class Main extends Component {
  state = { loading: true }
  componentDidMount() {
    this.props.startLoadingPosts().then(() => {
      this.setState({loading: false})
    })
    this.props.startLoadingComments()
  }
  render() {
    return (
      <div>
        <h1><Link to='/'> Photowall </Link></h1>
        <Route exact path='/' render={() => (<Photowall {...this.props} />)} />
        <Route path='/AddPhoto' render={({history}) => (<AddPhoto {...this.props} onHistory={history} />)} />
        <Route path='/single/:id' render={(params) => (<Single loading={this.state.loading} {...this.props} {...params} />)} ></Route>
      </div>
    )
  }
}

export default Main;