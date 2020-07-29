import React from 'react';

function ButtonLink(props) {
    // props => {className: "o que for informado", href: "o que link inserido"}
    return (
        <a href={props.href} className={props.className}>
        </a>
    );
}

export default ButtonLink;