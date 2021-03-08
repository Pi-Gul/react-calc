import React from 'react';
import './Button.css';

function isOperator(val) {
    return !isNaN(val) || val === '.' || val === '=';
}

export function Button(props) {
    return (
        <div 
        className={`button-wrapper ${
            isOperator(props.children) ? null : 'operator'
            }`}
        onClick={() => {props.handleClick(props.children)}}
        >        
            {props.children}
        </div>
    );
}