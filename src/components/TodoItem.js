import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.complete ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        console.log(this.state)
        return (
        <div style = { this.getStyle() }>
            <p>
                <input type="checkbox" onChange={this.props.checked.bind(this, id)}/> { ' ' }
                {title}
                <button onClick ={this.props.delTodo.bind(this, id)} style = {btnstyle}></button>
            </p>
        </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnstyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 5px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
