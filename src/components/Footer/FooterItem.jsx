import React from 'react';
import PropTypes from 'prop-types';
import './FooterItem.css';

const FooterItem = ({ content, wrapperClassName }) => {
	return <li className={wrapperClassName + '__item footer-item'}>{content}</li>;
};

FooterItem.propTypes = {
	content: PropTypes.string,
	wrapperClassName: PropTypes.string,
};

export default FooterItem;
