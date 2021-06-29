import React from 'react';

import PropTypes from 'prop-types';

import './Card.css';

const Card = ({ wrapperClassName, title, image, description }) => {
	return (
		<article className={wrapperClassName + '__card card'}>
			<header className={wrapperClassName + '__card-header card-header'}>
				<figure className={wrapperClassName + '__card-figure card-figure'}>
					<img
						src={image}
						alt=""
						className={wrapperClassName + '__card-image card-image'}
					/>
				</figure>
			</header>

			<div className={wrapperClassName + '__card-body card-body'}>
				<h3 className={wrapperClassName + '__card-title card-title'}>
					{title}
				</h3>
				<p className={wrapperClassName + '__card-description card-description'}>
					{description}
				</p>

				<a href="#" className={wrapperClassName + '__card-btn card-btn'}>
					read more
				</a>
			</div>
		</article>
	);
};

Card.propTypes = {
	wrapperClassName: PropTypes.string,
	title: PropTypes.string,
	image: PropTypes.any,
	description: PropTypes.string,
};

export default Card;
