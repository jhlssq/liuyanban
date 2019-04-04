import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

export default class ReplyItem extends Component {
  static propTypes = {
    reply: PropTypes.object.isRequired
  }

  render() {
    const { reply } = this.props
    return (
      <li className='list-group-item'>
        <img src={"https://www.gravatar.com/avatar/" + reply.gravatar}  alt={reply.gravatar} />
        <div className='text'>
          <span>{reply.email}: &nbsp;</span>
          { reply.text }
          <div>
            <span className="time"> { moment(reply.time).format('YYYY-MM-DD HH:mm:ss') } </span>
          </div>
        </div>
      </li> 
    )
  }
}
