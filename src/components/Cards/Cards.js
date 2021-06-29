import React from 'react';
import PropTypes from 'prop-types';
import CardList from './CardList';
import Card from './Card';
import './Cards.css';
const Cards = ({ wrapperClassName }) => {
	return (
		<section className={wrapperClassName + '__cards cards'}>
			<div className="container">
				<div className="row">
					{CardList.map((card) => {
						return (
							<Card
								title={card.title}
								description={card.description}
								wrapperClassName={wrapperClassName}
								image={card.image}
								key={card.id}
							></Card>
						);
					})}
				</div>
			</div>
		</section>
	);
};

Cards.propTypes = {
	wrapperClassName: PropTypes.string,
};

export default Cards;
