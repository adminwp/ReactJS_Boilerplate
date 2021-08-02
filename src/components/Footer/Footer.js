import React from 'react';
import PropsTypes from 'prop-types';
import Logo from '../UI/Logo';
import FooterList from './FooterList';
import FooterItem from './FooterItem';
import './Footer.css';
const Footer = ({ wrapperClassName }) => {
	return (
		<footer className={wrapperClassName + '__footer footer'}>
			<div className="container">
				<div className="row">
					<div className={wrapperClassName + '__footer-about footer-about'}>
						<Logo firstColor={'#212121'} secondColor={'#bdbdbd'}></Logo>
						<h2 className={wrapperClassName + '__footer footer-title'}>
							App Component
						</h2>
						<p className={wrapperClassName + '__footer footer-description'}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Praesentium provident porro aliquam corrupti minima molestias sed
							dignissimos eos unde ipsum? Aliquid beatae similique accusamus
							eaque recusandae ab perferendis, sunt odit.
						</p>
					</div>
					<ul className={wrapperClassName + '__footer-list footer-list'}>
						<h3 className="footer-list__title">Footer List</h3>
						{FooterList.map((footerItem) => {
							return (
								<FooterItem
									content={footerItem.content}
									key={footerItem.id}
									wrapperClassName={'footer-list'}
								></FooterItem>
							);
						})}
					</ul>
				</div>
			</div>
		</footer>
	);
};

Footer.propTypes = {
	wrapperClassName: PropsTypes.string,
};

export default Footer;
