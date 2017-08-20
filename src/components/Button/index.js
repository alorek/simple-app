import React from 'react';

const Button = (props) =>  {
    return (
        <button
            className="btn btn-default"
            onClick={ () => { props.actionFunc() } }
        >
            { props.label }
        </button>
    );
}

export default Button;
