import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'antd'

export default class EmailInput extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    visibleModel: PropTypes.bool.isRequired,
    currentWord: PropTypes.object.isRequired,
    editStuts: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
  }

  state = { 
      visible: false,
      email: '',
      error: ''
     }

  showModal = () => {
    this.props.actions.toggleVisibleModel( true, this.props.editStuts )
  }

  handleOk = (e) => {
    const email = this.state.email.trim()
    const { text,  currentWord, actions } = this.props
    actions.login( email )
    this.setState({ email: '', error: '' })
    if(this.props.editStuts === 'add'){
       actions.addWord( email, text, actions.allWords)
    }else{
       actions.addReply( currentWord, email, text, actions.allWords)
    } 
    
  }

  handleCancel = (e) => {
    this.props.actions.toggleVisibleModel( false, this.props.editStuts )
  }

  handleChange = e => {
    this.setState({ email: e.target.value })
  }

  handleKeyDown = e => {
    if (e.which === 13) {
      this.handleOk(e)
    }
  }

  render() {
      return (
       <div>
        <Modal title="填写邮箱地址即可留言" visible={this.props.visibleModel}
          onOk={this.handleOk} onCancel={this.handleCancel}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           >
          <input 
            className="form-control"
            type="text"
            placeholder="请输入邮箱"
            autoFocus="true"
            value={this.state.email}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}/>
        </Modal>
      </div>
    )
  }
}