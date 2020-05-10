import React, {Component} from 'react';
import Title from './Title';
import List from './List';

class Main extends Component {
  render() {
    return (
      <div>
        <Title title = {'To Do'}/>
        <List tasks = {['1','2']}/>
        <List tasks = {['3','4']}/>
      </div>
    )
  }
}

export default Main;