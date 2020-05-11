import React, {Component} from 'react'
import Photowall from './Photowall'
import AddPhoto from './AddPhoto'
import {Route, Link} from 'react-router-dom'

class Main extends Component {
  render() {
    return (
      <div>
        <h1><Link to='/'> Photowall </Link></h1>
        <Route exact path='/' render = {() => (
            <Photowall {...this.props} />
        )} />
        <Route path='/AddPhoto' render = {({history}) => (
            <AddPhoto {...this.props} />
        )} />
      </div>
    )
  }
}

export default Main;