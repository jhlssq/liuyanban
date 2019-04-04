import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MsgInput from './MsgInput'
import { getGravatar } from '../actions/db'

export default class Header extends Component {
  static propTypes = {
    addWord: PropTypes.func.isRequired,
    onSaveText: PropTypes.func.isRequired,
    toggleVisibleModel: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired
  }

  handleSave = text => {
    if (text.length !== 0) {
      if( this.props.email !== '' ){
         this.props.addWord( this.props.email, text, this.props.allWords)
      }else{
         this.props.onSaveText(text)
         this.props.toggleVisibleModel(true, 'add')
      }
    }
  }

  render() {
    let gravatar = getGravatar(this.props.email)
    return (
      <header className="lead">
        <h1 className="page-header">留言板</h1>
        <img src={"https://www.gravatar.com/avatar/" + gravatar} / >
        <MsgInput newTodo
                       onSave={this.handleSave} />
        <button  onClick={this.handleSave} className="btn btn-default">提交留言</button>
      </header>
    )
  }
}
