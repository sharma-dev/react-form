import React, { Component } from 'react'

class Tooltip extends Component {
    render () {
        
        const {
            className,
            message
        } = this.props;

        return (
            <span className={`tool-tip ${className || ""}`}>
                {message}
            </span>
        )
    }
}

export default Tooltip