import React from 'react';
import PropTypes from 'prop-types';

function ButtonLink({ className, href, children }) {
  // props => {className: "o que for informado", href: "o que link inserido"}
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

ButtonLink.defaultProps = {
  href: '/',
  className: '',
};

ButtonLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ButtonLink;
