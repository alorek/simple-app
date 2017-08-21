import React from 'react';

const Button = (props) =>  {
    const iconStyle = {marginRight: '5px'};
    return (
        <button
            className={ props.className }
            onClick={ () => { props.actionFunc() } }
        >
        { props.iconClass ?
            <span style={ iconStyle } className={ props.iconClass }></span> :
                null }
            <span>{ props.label }</span>
        </button>
    );
}

export default Button;
